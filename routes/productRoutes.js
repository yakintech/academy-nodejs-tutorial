const express = require('express')
const { productController } = require('../controller/productController')
const router = express.Router()



router.get('/',productController.getAll)
router.post('/',productController.add)



module.exports = router;