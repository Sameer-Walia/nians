const FeedbackModel = require("../models/feedbackModel");

exports.submitfeedback = async (req, res) => 
{
    try 
    {
        const newrecord = new FeedbackModel({ name: req.body.name, thougts: req.body.thoughts, rate1: req.body.rating1, rate2: req.body.rating2, rate3: req.body.rating3, rate4: req.body.rating4, rate5: req.body.rating5, rate6: req.body.rating6, rate7: req.body.rating7, rate8: req.body.rating8, rate9: req.body.rating9, rate10: req.body.rating10 })
        const result = await newrecord.save();  // it will save the record into real collection

        if (result) 
        {
            res.send({ statuscode: 1 })
        }
        else 
        {
            res.send({ statuscode: 0, msg: "Feedback Not Submitted" })
        }
    }
    catch (e) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
}



exports.uniquefeed = async (req, res) =>
{
    try
    {
        const result = await FeedbackModel.find({ name: req.params.name })
        if (result.length === 0) 
        {
            res.send({ statuscode: 0 })
        }
        else 
        {
            res.send({ statuscode: 1, uniquefeedback: result })
        }
    }
    catch (e) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
}



exports.getallfeedbacks = async (req, res) =>
{
    try
    {
        const result = await FeedbackModel.find()
        if (result.length === 0) 
        {
            res.send({ statuscode: 0 })
        }
        else 
        {
            res.send({ statuscode: 1, feedbacks: result })
        }
    }
    catch (e) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
}