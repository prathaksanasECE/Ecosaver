const productCenter = require("../models/ProductModel");


// All Products
const getAllProducts = async (req, res, next) => {
    const query = req.query.keyword ? {
        Productname:
        {
            $regex: req.query.keyword,
            $options: 'i'
        }
    }:req.query.category?{
        category:{
            $regex: req.query.category,
            $options: 'i'
        }
    }:{}
    const product = await productCenter.find(query);
    res.json({
        product
    })
}


//Specific product with id
const ProductId = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await (productCenter.findById(id));
        res.json(product);
        res.end();
    }
    catch (err) {
        res.end("Invalid Id");
    }
}

const AddProducts = async (req, res) => {
    const { Productname, amount, Stock } = req.body;
    const newProduct = await productCenter.create({
        Productname,
        amount,
        Stock
    })
    res.json({ newProduct });
    res.end();
}


//Delete Product
const DeleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const deleted = await productCenter.findByIdAndDelete(id);
        res.send("Sucessfully deleted")
        res.end();
    }
    catch (err) {
        res.send("Product Not Found");
    }

}


//Update Products
const UpdateItems = async (req, res) => {
    const newData = req.body;
    const id = req.params.id.trim();
    try {
        const updated = await productCenter.findByIdAndUpdate(
            id,
            newData,
            { new: true }
        )
        res.status(200).json({
            message: "Product updated Sucessfully",
            updatedProduct: updated
        })
    }
    catch (err) {
        res.send("Product doesnt exist Create new one");
        console.log(err);
    }
}



module.exports = { getAllProducts, ProductId, AddProducts, DeleteProduct, UpdateItems }