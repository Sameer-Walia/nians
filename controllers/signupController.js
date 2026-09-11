const SignupModel = require("../models/signupModel");
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt');
const { sendMail } = require("../utils/mailer");
const jwt = require("jsonwebtoken");


exports.signup = async (req, res) => 
{
    try 
    {
        const acttoken = uuidv4();
        console.log(acttoken)

        const encryp_pass = bcrypt.hashSync(req.body.pass, 10)

        const newrecord = new SignupModel({ name: req.body.name, phone: req.body.phone, email: req.body.email, password: encryp_pass, department: req.body.dep, usertype: "normal", actstatus: false, token: acttoken, googleId: "" })
        const result = await newrecord.save();  // it will save the record into real collection

        if (result) 
        {
            const mailOptions = {
                from: 'sameerwalia13@gmail.com', // transporter username email
                to: req.body.email,             // user's email id
                subject: 'Activation Mail from Nains Website.com',
                html: `Dear ${req.body.name}<br/><br/>Thanks for signing up on our website.<br/><br/>Click on the following link to activate your account.<br/><br/><a href='${process.env.FRONTEND_URL}/activateaccount?code=${acttoken}'>Activate Account<a/>`
            };

            const mailresp = await sendMail(mailOptions);
            if (mailresp === true)
            {
                res.send({ statuscode: 1 })
            }
            else
            {
                res.send({ statuscode: 2 })
            }
        }
        else 
        {
            res.send({ statuscode: 0, msg: "Error while Signing Up , try again" })
        }
    }
    catch (e) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
}


exports.activateuseraccount = async (req, res) =>
{
    try
    {
        const updateresult = await SignupModel.updateOne({ token: req.body.code }, { $set: { actstatus: true } });
        if (updateresult.modifiedCount === 1)
        {
            res.send({ statuscode: 1 })
        }
        else
        {
            res.send({ statuscode: 0 })
        }
    }
    catch (e)
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
}


exports.resendmail = async (req, res) =>
{
    try 
    {
        const user = await SignupModel.findOne({ email: req.body.email });
        if (user === null) 
        {
            res.send({ statuscode: 0, msg: "User not found with given email " });
        }
        else
        {
            const updatetoken = await SignupModel.updateOne({ email: req.body.email }, { $set: { actstatus: false } })
            if (updatetoken.modifiedCount === 1) 
            {
                const mailOptions = {
                    from: 'sameerwalia13@gmail.com', // transporter username email
                    to: req.body.email,             // user's email id
                    subject: 'Activation Mail from Nians',
                    html: `Dear ${user.name}<br/><br/>Thanks for signing up on our website.<br/><br/>Click on the following link to activate your account.<br/><br/><a href='${process.env.FRONTEND_URL}/activateaccount?code=${user.token}'>Activate Account<a/>`
                };

                const mailresp = await sendMail(mailOptions);
                if (mailresp === true)
                {
                    res.send({ statuscode: 1 })
                }
                else
                {
                    res.send({ statuscode: 2 })
                }
            }
            else
            {
                const mailOptions = {
                    from: 'sameerwalia13@gmail.com',
                    to: req.body.email,
                    subject: 'Activation Mail from SuperMarket.com',
                    html: `Dear ${user.name}<br/><br/>Thanks for signing up on our website.<br/><br/>Click on the following link to activate your account.<br/><br/><a href='http://localhost:3000/activateaccount?code=${user.token}'>Activate Account<a/>`
                };

                const mailresp = await sendMail(mailOptions);
                if (mailresp === true)
                {
                    res.send({ statuscode: 1 })
                }
                else
                {
                    res.send({ statuscode: 2 })
                }
            }
        }
    }
    catch (e) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
}

exports.login = async (req, res) => 
{
    try 
    {

        const result = await SignupModel.findOne({ email: req.body.email })
        // const result = await SignupModel.findOne({ email: req.body.email }).select("-phone");
        // .select("-phone"); = so phone is not shown in console.log and also phone:result.phone cannot be store in respdata
        console.log(result)
        if (result === null) 
        {
            res.send({ statuscode: 0 })
        }
        else 
        {
            if (bcrypt.compareSync(req.body.pass, result.password))
            {

                const jsontoken = jwt.sign({ id: result._id, role: result.usertype }, process.env.JWT_SKEY, { expiresIn: "15min" })
                const refreshjsontoken = jwt.sign({ id: result._id, role: result.usertype }, process.env.JWT_REFRESH_SKEY, { expiresIn: "7d" })

                const respdata = { _id: result._id, name: result.name, phone: result.phone, email: result.email, rollno: result.rollno, semester: result.semester, department: result.department, usertype: result.usertype, actstatus: result.actstatus }

                res.cookie("authToken", jsontoken, {   // authtoken is name of cookie and jsontoken is its value
                    httpOnly: true,
                    secure: true,    // when we launch the site , make is true
                    sameSite: "none",   // strict , lax , none 
                    maxAge: 15 * 60 * 1000,   // expiry time , time should be in milliseconds , 15 min
                });

                res.cookie("refreshToken", refreshjsontoken, {   // authtoken is name of cookie and jsontoken is its value
                    httpOnly: true,
                    secure: true,    // when we launch the site , make is true
                    sameSite: "none",   // strict , lax , none 
                    maxAge: 7 * 24 * 60 * 60 * 1000,   // expiry time , time should be in milliseconds , 7 days
                });

                res.send({ statuscode: 1, userdata: respdata })
            }
            else
            {
                res.send({ statuscode: 0 })
            }
        }
    }
    catch (e) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
}


exports.changepassword = async (req, res) => 
{
    try
    {
        const result = await SignupModel.findOne({ email: req.body.email })
        console.log(result)
        if (result === null)
        {
            res.send({ statuscode: 0 })
        }
        else
        {
            if (bcrypt.compareSync(req.body.currpass, result.password))
            {
                const encryp_newpass = bcrypt.hashSync(req.body.newpass, 10)
                const updatepass = await SignupModel.updateOne({ email: req.body.email }, { $set: { password: encryp_newpass } })
                if (updatepass.modifiedCount === 1) 
                {
                    res.clearCookie("authToken");
                    res.clearCookie("refreshToken");
                    res.clearCookie("staysignin");
                    res.send({ statuscode: 1 })
                }
                else 
                {
                    res.send({ statuscode: 0 })
                }
            }
            else
            {
                res.send({ statuscode: 0 })
            }
        }
    }
    catch (e) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
}

exports.logout = (req, res) => 
{
    try 
    {
        res.clearCookie("authToken");
        res.clearCookie("refreshToken");
        res.clearCookie("staysignin");
        res.send({ statuscode: 1 })
    }
    catch (e) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
}

exports.fetchoneuserdata = async (req, res) =>
{
    try
    {
        const result = await SignupModel.find({ email: req.params.useremail })
        if (result.length === 0) 
        {
            res.send({ statuscode: 0 })
        }
        else 
        {
            res.send({ statuscode: 1, oneuserdata: result[0] })
        }
    }
    catch (e) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
}

exports.fetchallusers = async (req, res) =>
{
    try
    {
        const result = await SignupModel.find()
        if (result.length === 0) 
        {
            res.send({ statuscode: 0 })
        }
        else 
        {
            res.send({ statuscode: 1, usersdata: result })
        }
    }
    catch (e) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
}

exports.updateuserprofile = async (req, res) =>
{
    try
    {
        const updateresult = await SignupModel.updateOne({ email: req.body.uemail }, { $set: { name: req.body.name, phone: req.body.phone, rollno: req.body.rollno, department: req.body.dep, semester: req.body.sem } });

        if (updateresult.modifiedCount === 1) 
        {
            res.send({ statuscode: 1 })
        }
        else 
        {
            res.send({ statuscode: 0 })
        }
    }
    catch (e) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
}


// contact-us api  , here it has no model , message directly sent on email


exports.contact = async (req, res) =>
{
    try
    {
        const mailOptions = {
            from: 'sameerwalia13@gmail.com', // transporter username email
            to: 'sameerwalia13@gmail.com',  // any email id of admin where u want to send email
            replyTo: req.body.email,
            subject: 'Message from  Nians website- Contact Us Page',
            html: `<b>Name:- </b>${req.body.name}<br/><b>Email:- </b>${req.body.email}<br/><b>Message:- </b>${req.body.message}`
        };

        const mailresp = await sendMail(mailOptions);
        if (mailresp === true)
        {
            res.send({ statuscode: 1 })
        }
        else
        {
            res.send({ statuscode: 2 })
        }
    }
    catch (e) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
}


exports.fetchoneuser = async (req, res) =>
{
    try
    {
        const result = await SignupModel.find({ _id: req.params.userid })
        if (result.length === 0) 
        {
            res.send({ statuscode: 0 })
        }
        else 
        {
            res.send({ statuscode: 1, oneuserdata: result[0] })
        }
    }
    catch (e) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
}

exports.updateoneuser = async (req, res) =>
{
    try
    {
        const updateresult = await SignupModel.updateOne({ _id: req.body.uid }, { $set: { name: req.body.name, phone: req.body.phone, email: req.body.email, rollno: req.body.rollno, department: req.body.dep, semester: req.body.sem } });

        if (updateresult.modifiedCount === 1) 
        {
            res.send({ statuscode: 1 })
        }
        else 
        {
            res.send({ statuscode: 0 })
        }
    }
    catch (e) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
}

exports.deluser = async (req, res) =>
{
    try
    {
        const result = await SignupModel.deleteOne({ _id: req.query.id })
        if (result.deletedCount === 1)
        {
            res.send({ statuscode: 1 })
        }
        else
        {
            res.send({ statuscode: 0 })
        }
    }
    catch (e) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
}

exports.searchuser = async (req, res) =>
{
    try
    {
        const result = await SignupModel.find({ email: req.query.email })
        if (result.length === 0) 
        {
            res.send({ statuscode: 0 })
        }
        else 
        {
            res.send({ statuscode: 1, userdata: result[0] })
        }
    }
    catch (e) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
}