const express = require("express");
const auth = require("./auth.router");
const profile = require("./profile.router");

const router = express.Router();

router.use("/auth", auth);
router.use("/profile", profile);

module.exports = router;