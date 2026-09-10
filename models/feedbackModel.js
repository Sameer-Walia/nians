const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        thougts: {
            type: String,
            required: true
        },
        rate1: {
            type: Number,
            required: true
        },
        rate2: {
            type: Number,
            required: true
        },
        rate3: {
            type: Number,
            required: true
        },
        rate4: {
            type: Number,
            required: true
        },
        rate5: {
            type: Number,
            required: true
        },
        rate6: {
            type: Number,
            required: true
        },
        rate7: {
            type: Number,
            required: true
        },
        rate8: {
            type: Number,
            required: true
        },
        rate9: {
            type: Number,
            required: true
        },
        rate10: {
            type: Number,
            required: true
        }
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model("feedback", FeedbackSchema, "feedback");
