var express = require('express');
var router = express.Router();
var managersController = require('../controllers/managersController.js');


//TODO: ActivityTypes
router.get('/',managersController.managersPage);
router.get('/access',managersController.accessLevelPage);

router.post('/add',managersController.addManagerAction);
router.post('/access/add',managersController.addAccessLevelAction);
//test
// router.get('/activitytype/add',managersController.actTypeAddPage);
// router.post('/activitytype/add',managersController.actTypeAddAction);

module.exports = router;
