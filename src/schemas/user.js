const {Schema} = require("mongoose")
const validator = require("validator")

const userSchema = new Schema({
    first_name: {
        type: String,
        required: [true, "Please proide a first name!"]
    },
    last_name: {
        type: String,
        required: [true, "Please provide a last name!"]
    },
    username: {
        type: String,
        required: [true, "Please provide an email!"],
        unique: true,
        validate: [validator.isEmail, 'Please provide a valid email!']
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: [8, "must have a minimum length of 8"],
        select: false
    },
    passwordChangedAt: {
        type: Date
    },
    passwordResetToken: {
        type: String
    },
    passwordResetTokenEAt: {
        type: Date,
        select: false
    }
})

module.exports = userSchema