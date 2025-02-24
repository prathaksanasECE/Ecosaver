const express = require("express");
const { default: mongoose } = require("mongoose");
const mongo = require("mongoose");

const productSchema = new mongo.Schema({
    Productname: { type: String, required: true },
    amount: { type: Number, required: true },
    images : [
        {
            image: String
        }
    ],
    Stock: { type: Number, required: true },
    ExpiryDate: { type: Date, required: false },
    category:{type:[String],required:true},
    Description: { type: String, required: false },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviews: { type: [String], default: [] },
    discount:{ type:Number }

})

const productModel = mongo.model("Product", productSchema);

module.exports = productModel;