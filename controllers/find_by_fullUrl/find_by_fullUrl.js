const URL = require("../../database/schema/URL");

module.exports.findByFullUrl = async (fullUrl) => {
    try {
        const url = await URL.findOne({
            fullUrl
        }).select({_id: 0, __v: 0});
        if (url) return url;
        return false;
    } catch (e) {
        throw e;
    }
}

// Mr. Perfect