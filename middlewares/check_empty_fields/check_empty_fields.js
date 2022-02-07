const _ = require("lodash");
const isURL = require("validator/lib/isURL");

module.exports.isEmptyFields = async (req, res, next) => {
    const fullUrl = req.body.fullUrl.trim();
    if (!_.isEmpty(fullUrl)) {
        if (isURL(fullUrl)) {
            next();
        } else {
            res.status(400).json({
                message: "fullUrl is not valid url. Please provide valid fullUrl."
            });
        }
    } else {
        res.status(400).json({
            message: "fullUrl not provided. Please provide fullUrl."
        });
    }
}

// Mr. Perfect