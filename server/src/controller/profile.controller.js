const { validationResult } = require("express-validator");
const userService = require("../service/user.service");

class ProfileController {
    updatePhone = async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) return res.status(400).json(err);

        const { email } = req.user;
        // console.log(email);
        const { pNumber } = req.body;
        // console.log(pNumber);
        const User = await userService.findUserByEmail(email);
        // console.log(User);
        if(pNumber!==null && pNumber!== undefined){
            User.phone = Number(pNumber);
        }
        User.save();
        // if(pNumber!==null && pNumber!== undefined){
        //     await User.updateOne({phone: Number(pNumber)});
        // }
        return res.sendStatus(200);

    }
}

const profileController = new ProfileController();

module.exports = profileController;