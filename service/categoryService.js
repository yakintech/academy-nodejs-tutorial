const { categories } = require("../data/categories");


const categoryService = {
    getAll: (req, res) => {
        res.json(categories);
    },
    getCategoryById: (req, res) => {
        let id = req.params.id;
        let category = categories.find(q => q.id == id);

        if (category == undefined) {
            res.status(404).send('Category not found!')
        }
        else {
            res.json(category);
        }
    },
    add: (req, res) => {

        categories.push(req.body);
        res.json('Success')

    }
}




module.exports = {
    categoryService
}
