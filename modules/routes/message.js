var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String
}); // end contactSchema
var contactModel = mongoose.model('contactModel', contactSchema);

router.post('/', function(req, res) {
  console.log('contact url hit', req.body);
  var newContactMessage = req.body;
  console.log('req.body:', req.body);
  contactModel( newContactMessage ).save().then(function() {
    res.sendStatus(201);
  }).catch(function(err) {
    console.log('error', err);
  });
}); // end router.post for contact

router.get('/', function(req, res){
  console.log('contactObject');
  contactModel.find().then(function(message) {
    res.send(message);
    console.log('message:', message);
  });
}); // end contact get call

module.exports = router;
