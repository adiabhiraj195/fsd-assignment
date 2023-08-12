const express = require("express");
const userValidator = require("../validators/user.validate");
const userController = require("../controller/user.controller");

const auth = express.Router();

auth.post("/", userValidator.register, userController.register);

module.exports = auth;