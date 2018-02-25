// requires
var express = require('express');
var app = express();
var index = require('./modules/routes/index');
var path = require('path');
var bodyParser = require('body-parser');

// uses
app.use(express.static('public'));
app.use('/', index);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// globals
var port = process.env.PORT || 9999;

// spin up server
app.listen(port, function() {
  console.log('server up on:', port);
});
