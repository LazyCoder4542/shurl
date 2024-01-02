const { model } = require("mongoose")
const linkSchema = require("../schemas/link")

const Link = model('Link', linkSchema)
module.exports = Link