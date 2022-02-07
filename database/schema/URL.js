const mongoose = require("mongoose");

const URL = new mongoose.Schema({
    id: {
        type: Number,
        index: true,
        unique: [true, "ID already exists."],
        required: [true, "ID must be provided."]
    },
    fullUrl: {
        type: String,
        index: true,
        unique: [true, "fullUrl already exists."],
        required: [true, "fullUrl must be provided."]
    },
    shortUrl: {
        type: String,
        index: true,
        unique: [true, "shortUrl already exists."],
        required: [true, "shortUrl must be provided."]
    },
    createdOn: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model("urls", URL);

// Mr. Perfect