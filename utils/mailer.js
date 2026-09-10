require('dotenv').config()
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_UNAME,
        pass: process.env.SMTP_PASS
    },
});


const sendMail = async (mailOptions) =>
{
    try
    {
        let info = await transporter.sendMail(mailOptions);
        console.log("Email sent :", info.response);
        return true
    }
    catch (error)
    {
        console.log("Email error :", error.message);
        return false
    }
};

module.exports = { transporter, sendMail };
