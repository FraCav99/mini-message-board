var express = require('express');
var router = express.Router();
var messages = require('../public/stylesheets/javascripts/messages');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages });
});

module.exports = router;
