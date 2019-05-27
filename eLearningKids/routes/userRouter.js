var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController.js');

router.post('/', userController.login);

module.exports = router;
