// requires
var express = require('express');
var app = express();
var index = require('./modules/routes/index');
var message = require('./modules/routes/message');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/contactDB');

// uses
app.use(express.static('public'));
app.use('/', index);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/message', message);

// globals
var port = process.env.PORT || 9999;

// spin up server
app.listen(port, function() {
  console.log('server up on:', port);
});
