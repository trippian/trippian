const express = require('express');
const AWS_S3 = require('../controllers/aws.js');

module.exports = function(app) {
  app.get('/auth/google')
  app.get('/auth/facebook')
  
}