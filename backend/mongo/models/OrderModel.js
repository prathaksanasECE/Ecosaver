const mongo = require("mongoose");

const orderSchema = new mongo.Schema({
    Productname: String,
    amount: Number,
    count: Number,
    OrderDate: Date,
    deliveryStatus:Boolean
})

const orderModel = mongo.model("OrderedItems", orderSchema);

module.exports = orderModel;