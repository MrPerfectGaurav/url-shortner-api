const Router = require("express").Router();
const {isEmptyFields} = require("../middlewares/middlewares");


Router.use("/create_shortner", isEmptyFields, require("./post_full_url/post_full_url"));

module.exports = Router;

// Mr. Perfect