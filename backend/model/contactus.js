const mongoose = require('mongoose');
const { Schema } = require("mongoose");
const Model = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    descirption: {
        type: String,
        required: true,
    },

}, {
    collection: 'contactus',
    versionKey: false,
})


module.exports = mongoose.model("ContactUs", Model);