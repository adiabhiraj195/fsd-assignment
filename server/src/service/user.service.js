const { genSalt, hash } = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../db/modle/user.mongo");

class UserService {
    createUser = async ({ fullName, email, password }) => {
        const salt = await genSalt();
        console.log(password)
        const hashPassword = await hash(password, salt);
        const verficationToken = jwt.sign({ email }, process.env.VERIFY_EMAIL_SECRET);

        await User.create({
            fullName: fullName,
            email: email,
            password: hashPassword,
            verficationToken: verficationToken
        });
        console.log("User Created");
    };

    findUserByEmail = async (email) => {
        return await User.findOne({ email: email });
    }
}

const userService = new UserService();

module.exports = userService;