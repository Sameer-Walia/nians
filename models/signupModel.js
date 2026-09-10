const mongoose = require('mongoose');

const SignupSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true
        },

        department: {
            type: String,
            required: true
        },
        usertype: {
            type: String,
            required: true
        },
        actstatus: {
            type: Boolean,
            required: true
        },
        token: {
            type: String,
            required: true
        },
        googleId: {
            type: String
        }
    },
    { versionKey: false }
);


module.exports = mongoose.model("signup", SignupSchema, "signup");