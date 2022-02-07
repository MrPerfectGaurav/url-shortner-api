const mongoose = require("mongoose");
const URI = process.env.MONGO_URI;

try {
    (async () => {
        await mongoose.connect(URI, (error) => {
            if (!error) return console.log("Database connected successfully.");
            return console.log(error);
        });
    })()
} catch (e) {
    console.log(e);
}

module.exports;

// Mr. Perfect