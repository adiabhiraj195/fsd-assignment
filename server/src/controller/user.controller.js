const { validationResult } = require("express-validator");
const userService = require("../service/user.service");

class UserController {
    register = async (req, res) => {
        const err = validationResult(req);

        if (!err.isEmpty()) {
            return res.status(400).json(err);
        }

        const { fullName, email, password1 } = req.body;
        await userService.createUser({
            fullName,
            email,
            password:password1,
        });

        return res.sendStatus(200);
    }
}
const userController = new UserController();

module.exports = userController;


