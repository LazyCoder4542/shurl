const {Document, Types} = require("mongoose")
const Link = require("../model/linkModel")
const { nanoid } = require("nanoid")
const validator = require("validator")
const catchAsync = require("../utils/catch-async")

const createLink = catchAsync(async (req, res, next) => {
    const {url, label} = req.body
    if (!validator.isURL(url)) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid URL"
        })
    }
    let newLink = new Link({url, label, short_url: nanoid(10)})
    const savedLink = await newLink.save()
    res.status(200).json({
        status: "success",
        data: {
            id: savedLink._id,
            url,
            label,
            short_url: savedLink.short_url,
        }
    })
})
const getLinkByID = catchAsync(async (req, res) => {
    const {id} = req.params
    const link = await Link.find({_id: id})

    res.status(200).json({
        status: "success",
        data: {
            link
        }
    })
})

module.exports = {createLink, getLinkByID}