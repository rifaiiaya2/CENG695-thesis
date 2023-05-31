const mongoose = require('mongoose');
const { Schema } = require("mongoose");
const Model = new Schema({
    dateIn: {
        type: Date,
        required: true,
    },
    dateOut: {
        type: Date,
        required: true,
    },
    typeofchl: {
        type: String,
        required: true,
    },
    children: {
        type: Number,
        required: true,
    },
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },phonenumber: {
        type: String,
        required: true,
    }
  

}, {
    collection: 'book',
    versionKey: false,
})


module.exports = mongoose.model("Book", Model);