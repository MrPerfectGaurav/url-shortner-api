const Router = require("express").Router();
const {insertOneUrl, findByFullUrl} = require("../../controllers/controllers");

Router.post("/", async (req, res) => {
    const fullUrl = req.body.fullUrl;
    try {
        const url = await findByFullUrl(fullUrl);
        if (url) return res.status(200).json(url);
        else {
            try {
                const url = await insertOneUrl(fullUrl);
                if (url) return res.status(200).json(...url);
                else res.status(500).json({
                    message: "Internal server error occurred. Please try after sometimes."
                });
            } catch (e) {
                res.status(500).json({
                    message: "Internal server error occurred. Please try after sometimes."
                });
            }
        }
    } catch (e) {
        res.status(500).json({
            message: "Internal server error occurred. Please try after sometimes."
        });
    }
});

module.exports = Router;

// Mr. Perfect