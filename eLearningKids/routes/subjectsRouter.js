var express = require('express');
var router = express.Router();
var subjectsController = require('../controllers/subjectsController.js');

router.get('/',subjectsController.subjectsPage);
// // router.post('/:id',userController.subjectsAction);

// router.get('/add',subjectsController.addPage);
router.post('/add',subjectsController.addSubjectAction);

// router.get('/activitytype/add',subjectsController.actTypeAddPage);
// router.post('/activitytype/add',subjectsController.actTypeAddAction);

module.exports = router;
