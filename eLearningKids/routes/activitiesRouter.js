var express = require('express');
var router = express.Router();
var activitiesController = require('../controllers/activitiesController.js');


//TODO: ActivityTypes
router.get('/',activitiesController.activitiesPage);
router.get('/types',activitiesController.activityTypesPage);
// // router.post('/:id',userController.activitiesAction);

// router.get('/add',activitiesController.addPage);
router.post('/add',activitiesController.addActivityAction);
router.post('/types/add',activitiesController.addActivityTypeAction);
//test
// router.get('/activitytype/add',activitiesController.actTypeAddPage);
// router.post('/activitytype/add',activitiesController.actTypeAddAction);

module.exports = router;
