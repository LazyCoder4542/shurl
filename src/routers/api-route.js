const express = require("express");
const AppError = require("../utils/app-error");

const authRouter = require("./authRouter");
const linkRouter = require("./linkRouter");

const apiRouter = express.Router()

apiRouter.route('/').get((req, res) => {
    res.status(200).send("Helo")
})
apiRouter.use('/links', linkRouter)

apiRouter.all("*", (req, res, next) => {
    next(new AppError(`No route for ${req.method} | '${req.url}'`, 404))
})
module.exports = apiRouter