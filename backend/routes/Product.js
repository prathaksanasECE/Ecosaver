const express = require("express");
const router = express.Router();

//function dependencies
const { getAllProducts, ProductId, AddProducts, DeleteProduct, UpdateItems } = require("../mongo/Functions/ProductFunction")


router.route("/").get(getAllProducts);
router.route("/:id").get(ProductId)
router.route("/").post(AddProducts)
router.route("/:id").delete(DeleteProduct);
router.route("/:id").put(UpdateItems);


module.exports = router;
