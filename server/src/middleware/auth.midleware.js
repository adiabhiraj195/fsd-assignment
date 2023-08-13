const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const authHeader = req.headers["authorization"];

    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403);
            try {
                const { fullName, email } = decoded.requestUser.user;
                // console.log(email);
                req.user = { fullName, email };
                next();
            } catch (error) {
                console.log(error);
                return res.sendStatus(403);
            }
        }
    );
}

module.exports = {
    authenticate,
}