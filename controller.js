const { Product } = require("../models/products.model");
model.exports.index = ( req, res) => {
    res.json({
        title: "Prodcut Mnanager",
    });
};

module.exports.createProduct = ( req, res) => {
    const {title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};