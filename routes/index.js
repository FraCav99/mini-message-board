var express = require('express');
var moment = require('moment');
var router = express.Router();

// Sample messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: moment()
      .startOf('hour' - 1)
      .fromNow(),
    title: "Hello everyone!"
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: moment()
      .startOf('hour' - 1)
      .fromNow(),
    title: "Today is a good day!"
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages });
});

module.exports = router;
