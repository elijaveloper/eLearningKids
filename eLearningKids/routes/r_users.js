var express = require('express');
var router = express.Router();
var users = require("../controllers/c_users.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users.login("testUsername","123456789"));
});

module.exports = router;
