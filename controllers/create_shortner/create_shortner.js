const URL = require("../../database/schema/URL");
const { customAlphabet } = require("nanoid");
const id = customAlphabet('1234567890', 6);
const shortUrlId = customAlphabet('abcdefghijklmnopqrstuvwxyz', 5);

module.exports.insertOneUrl = async (fullUrl) => {
    try {
        const url = await URL.insertMany({
            id: id(),
            fullUrl,
            shortUrl: `${process.env.DOMAIN}${process.env.PORT}/${shortUrlId()}`
        });
        if (url) return url;
    } catch (e) {
        throw e;
    }
}

// Mr. Perfect