var express = require('express');
var router = express.Router();
var classesController = require('../controllers/classesController.js');

router.get('/',classesController.classesPage);
//router.post('/',classesController.classAction);

//router.get('/add',classesController.addClassPage);
router.post('/add',classesController.addClassAction);

module.exports = router;
