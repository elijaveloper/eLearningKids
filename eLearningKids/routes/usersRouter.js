var express = require('express');
var router = express.Router();
var userController = require('../controllers/usersController.js');

router.get('/',userController.loginPage);
router.post('/',userController.loginAction);

router.get('/add',userController.addUserPage);
router.post('/add',userController.addUserAction);

module.exports = router;
