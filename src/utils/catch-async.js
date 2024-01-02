function catchAsync(fn) {
    return async (req, res, next) => {
        fn(req, res, next).then(err => next(err))
    }
}

module.exports = catchAsync