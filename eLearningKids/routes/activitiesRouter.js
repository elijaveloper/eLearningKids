var express = require('express');
var router = express.Router();
var activitiesController = require('../controllers/activitiesController.js');

router.get('/',activitiesController.showActivitiesPage);
router.get('/activitytype',activitiesController.showActivityTypesPage);
// // router.post('/:id',userController.activitiesAction);

// router.get('/add',activitiesController.addPage);
router.post('/add',activitiesController.addActivityAction);

// router.get('/activitytype/add',activitiesController.actTypeAddPage);
// router.post('/activitytype/add',activitiesController.actTypeAddAction);

module.exports = router;
