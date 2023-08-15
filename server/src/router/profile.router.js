const { Router } = require("express");
const profileController = require("../controller/profile.controller");
const { authenticate } = require("../middleware/auth.midleware");

const profileRouter = Router();

profileRouter.post("/fullName", authenticate, profileController.updateFullName);
profileRouter.post("/email", authenticate, profileController.updateEmail);
profileRouter.post("/phone", authenticate, profileController.updatePhone);


profileRouter.get("/alldata", authenticate, profileController.fetchAllData);

module.exports = profileRouter;