const { Router } = require("express");
const profileController = require("../controller/profile.controller");
const { authenticate } = require("../middleware/auth.midleware");

const profileRouter = Router();

profileRouter.post("/phone", authenticate, profileController.updatePhone);
profileRouter.post("/phone", authenticate, profileController.updatePhone);

module.exports = profileRouter;