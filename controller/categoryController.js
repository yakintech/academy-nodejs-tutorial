const { category } = require("../models/Category")



const categoryController = {
    getAll: (req, res) => {

        category.find({}, function (err, docs) {
            if (!err) {
                res.json(docs)
            }
            else {
                res.status(500).json(err)
            }
        })

    },
    getById: (req, res) => {
        let id = req.params.id;

        category.findById(id, (err,doc) => {
            if(!err){
                res.json(doc);
            }
            else{
                res.status(500).json(err);
            }
        })
    },
    add: (req, res) => {

    },
    remove: () => {

    }
}

module.exports = {
    categoryController
}