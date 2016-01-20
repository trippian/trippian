import express from 'express';
import {
  getPopularDestinations
}
from '../controllers/destinationController';
import {
  createUser, getPopularTrippians
}
from '../controllers/userController';
import {
  getSignedRequest
}
from '../controllers/aws';
// import { authController } from '../controllers/auth';
import destination from '../../../_planning/json-data-format/destination.json';
import trippian from '../../../_planning/json-data-format/trippian.json';

export default function (app) {
  // LANDING PAGE - GET POPULAR TRIPPIANS AND DESTINATIONS
  // app.get('/destination', getPopularDestinations);
  // app.get('/trippian', getPopularTrippians);
  app.post('/api/users/:facebookId', createUser);
  app.get('/api/destination/:destinationId', function (req, res) {
    res.send(destination);
  });
  app.get('/api/trippian/:userId', function (req, res) {
    res.send(trippian);
  })

  // FACEBOOK AUTH
  // app.get('/auth/facebook', authController.facebook);
  // app.get('/auth/facebook/callback', authController.facebookCallback, authController.validate);

  // AMAZON S3
  app.get('/signS3', getSignedRequest);
}
