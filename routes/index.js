var express = require('express');
var router = express.Router();
var User = require("../models").User;
//console.log(User);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
