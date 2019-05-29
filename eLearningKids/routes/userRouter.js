var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController.js');

router.post('/register', userController.loginAction);
router.get('/',userController.loginPage);

module.exports = router;
