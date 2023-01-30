const { adminUser } = require("../models/AdminUser")



const adminUserController = {
    getAll: (req, res) => {

        adminUser.find({}, (err, docs) => {
            if (!err)
                res.json(docs);
            else
                res.status(500).json(err);
        })

    }
}

module.exports = {
    adminUserController
}