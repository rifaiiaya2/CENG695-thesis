const mongoose = require('mongoose');
const { Schema } = require("mongoose");

const Model = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    image: {
        type: Array,
        // required: true,
      },  

}, {
    collection: 'rooms',
    versionKey: false,
})



module.exports = mongoose.model("Rooms", Model);