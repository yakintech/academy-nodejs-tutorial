const express = require('express');
const { adminUserController } = require('../controller/adminUserController');
const router = express.Router();



router.get('/', adminUserController.getAll);


module.exports = router;

