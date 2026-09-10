const mongoose = require('mongoose');

const ResetPassSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        exptime: {
            type: Date,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model("resetpass", ResetPassSchema, "resetpass");
