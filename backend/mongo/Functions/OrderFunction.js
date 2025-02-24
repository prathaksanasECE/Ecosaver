const mongoose = require("mongoose");

const OrderCart = require("../models/OrderModel");

//View Cart Items
const CartItems = async (req, res) => {
    const items = await OrderCart.find({})
    res.send(items);
}

//Add items
const PlaceOrders = async (req, res) => {
    const { Productname, amount, count } = req.body;
    const orderDate = new Date();
    const placed = await OrderCart.create({
        Productname,
        amount,
        count,
        orderDate
    })
    res.send(placed);
}


//Delete Items
const DeleteCartItems = async (req, res) => {
    const id = req.params.id;
    try {
        const deleted = await OrderCart.findByIdAndDelete(id);
        res.send("deleted from cart");
        res.end()
    }
    catch (err) {
        res.send("Error in finding product");
    }
}

module.exports = { CartItems, PlaceOrders, DeleteCartItems };