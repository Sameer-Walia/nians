const teachermodel = require("../models/teacherModel");

exports.addteacher = async (req, res) =>
{
    try
    {
        const teacher = new teachermodel({ name: req.body.name, email: req.body.email, phone: req.body.phone, department: req.body.dep, subject: req.body.subjectname, subjectcode: req.body.subjectcode })
        const result = await teacher.save();  // it will save the record into real collection

        if (result) 
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

exports.fetchallteachers = async (req, res) =>
{
    try
    {
        const result = await teachermodel.find()
        if (result.length === 0) 
        {
            res.send({ statuscode: 0 })
        }
        else 
        {
            res.send({ statuscode: 1, teacherdata: result })
        }
    }
    catch (e) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
}

exports.fetchoneteacher = async (req, res) =>
{
    try
    {
        const result = await teachermodel.find({ _id: req.query.id })
        if (result.length === 0) 
        {
            res.send({ statuscode: 0 })
        }
        else 
        {
            res.send({ statuscode: 1, oneteacherdata: result[0] })
        }
    }
    catch (e) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
}

exports.updateteacher = async (req, res) =>
{
    try
    {
        const updateresult = await teachermodel.updateOne({ _id: req.body.tid }, { $set: { name: req.body.name, phone: req.body.phone, email: req.body.email, department: req.body.dep, subjectname: req.body.subjectname, subjectcode: req.body.subjectcode } })
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

exports.delteacher = async (req, res) =>
{
    try
    {
        const result = await teachermodel.deleteOne({ _id: req.params.id })
        if (result.deletedCount === 1) 
        {
            res.send({ statuscode: 1, msg: "Teacher Data deleted successfully" })
        }
        else 
        {
            res.send({ statuscode: 0, msg: "Teacher Data not deleted" })
        }
    }
    catch (e) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
}


exports.fetchallteacher = async (req, res) =>
{
    try
    {
        const result = await teachermodel.find()
        if (result.length === 0) 
        {
            res.send({ statuscode: 0 })
        }
        else 
        {
            res.send({ statuscode: 1, teacherdata: result })
        }
    }
    catch (e) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
}

exports.allteacherfeed = async (req, res) =>
{
    try
    {
        const result = await teachermodel.find()
        if (result.length === 0) 
        {
            res.send({ statuscode: 0 })
        }
        else 
        {
            res.send({ statuscode: 1, teacherdata: result })
        }
    }
    catch (e) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
}

exports.fetchteachername = async (req, res) =>
{
    try
    {
        const result = await teachermodel.findOne({ _id: req.params.nid })
        if (result === null) 
        {
            res.send({ statuscode: 0 })
        }
        else 
        {
            res.send({ statuscode: 1, teacherdata: result })
        }
    }
    catch (e) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
}

exports.fetchoneteacher_sub_code = async (req, res) =>
{
    try
    {
        const result = await teachermodel.findOne({ name: req.params.name })
        if (result === null) 
        {
            res.send({ statuscode: 0 })
        }
        else 
        {
            res.send({ statuscode: 1, sub_subcode: result })
        }
    }
    catch (e) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
}