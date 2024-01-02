const {Schema} = require("mongoose")
const linkSchema = new Schema({
    url: {
        type: String,
        required: [true, "Please provide a url"]
    },
    short_url: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    label: {
        type: String,
        required: [true, "Please provide a label"]
    }
})

module.exports = linkSchema