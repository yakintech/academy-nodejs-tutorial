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
    getById: () => {

    },
    add: (req, res) => {

    },
    remove: () => {

    }
}

module.exports = {
    categoryController
}