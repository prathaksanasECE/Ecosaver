const express=require("express");
const ProductStore=require("./ProductModel");

const CartSchema=new mongo.Schema({
        product:[ProductStore],
        userId:mongoose.Schema.Types.ObjectId,
        Number_Of_Products:Number
})
const CartModel=mongo.model("Cart",CartSchema);
 module.exports=CartModel;