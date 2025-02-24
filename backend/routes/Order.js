const express = require("express");
const router = express.Router();

//Function dependancies
const { CartItems, PlaceOrders, DeleteCartItems } = require("../mongo/Functions/OrderFunction")

router.route("/").get(CartItems);
router.route("/").post(PlaceOrders);
router.route("/:id").delete(DeleteCartItems);

module.exports = router;
