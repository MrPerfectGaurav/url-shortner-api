const express = require("express");
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 4000;
require("./database/connection");

const app = express();

app.use(express.json());
app.use(cors({ withCredentials: true, origin: process.env.ORIGIN }));

app.use("/api", require("./router/router"));

app.listen(PORT, (error) => {
    if (!error) return console.log(`Server running on PORT: http://localhost:${PORT}`);
    return console.log(error);
});

// Mr. Perfect