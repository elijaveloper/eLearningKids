var express = require('express');
var router = express.Router();
var userController = require('../controllers/usersController.js');

router.get('/',userController.loginPage);
router.post('/',userController.loginAction);

router.get('/register',userController.registerPage);
router.post('/register',userController.registerAction);

module.exports = router;
