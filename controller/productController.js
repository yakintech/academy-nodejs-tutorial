const { product } = require("../models/Product");

const productController = {
    getAll: (req, res) => {
        product.find({}).populate('categoryId').exec(function (err, docs) {
            if (!err) {
                res.json(docs)
            }
            else {
                res.status(500).json(err);
            }
        })
    },
    add: (req,res) => {
            let newProduct = new product({
                name: req.body.name,
                unitPrice: req.body.unitPrice,
                unitsInStock: req.body.unitsInStock,
                categoryId: req.body.categoryId
            })
    
            newProduct.save(function (err, doc) {
                if (!err) {
                    res.json(doc)
                }
                else {
                    res.status(500).json(err)
                }
            })
    }
}

module.exports = {
    productController
}