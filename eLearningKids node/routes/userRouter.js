var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController.js.js');

router.post('/', userController.login);

module.exports = router;
