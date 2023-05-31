const mongoose = require('mongoose');
const { Schema } = require("mongoose");

const Model = new Schema({
    title: {
        type: String,
        required: true,
    },
    descirption: {
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
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    },
}, {
    collection: 'items',
    versionKey: false,
})

Model.pre(['find', 'save'], function () {
    this.populate(['category']);
});

module.exports = mongoose.model("Item", Model);