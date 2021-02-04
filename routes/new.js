var express = require('express');
var moment = require('moment');
var router = express.Router();
var messages = require('../public/stylesheets/javascripts/messages');

router.get('/', function(req, res, next) {
    res.render('form');
});

router.post('/', function(req, res, next) {
    const newMessage = {
        text: req.body.messageText,
        user: req.body.messageAuthor || "Anonymous",
        title: req.body.messageTitle,
        added: moment()
        .startOf('hour' - 1)
        .fromNow()
    };

    messages.push(newMessage);
    res.redirect('/');
});

module.exports = router;