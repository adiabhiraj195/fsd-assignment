const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,

    },
    password: {
        type: String,
        require: true
    },
    verficationToken: {
        type: String,
        require: true
    }
    //reference to the data collection of user
});

module.exports = mongoose.model("User", userSchema);