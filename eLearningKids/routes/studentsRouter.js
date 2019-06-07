var express = require('express');
var router = express.Router();
var controller = require('../controllers/studentsController.js');

router.get('/',controller.page);
router.post('/add',controller.addAction);

module.exports = router;
