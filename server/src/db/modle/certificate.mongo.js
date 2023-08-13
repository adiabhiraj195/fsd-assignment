const mongoose = require("mongoose");

const certificateSchema = mongoose.Schema({
    title: {
        type: String,
    },
    organisaion:{
        type: String,
    },
    logo:{
        type:String,
    }
});

module.exports = certificateSchema;