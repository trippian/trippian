import express from 'express'
import {
  getPopularDestinations
}
from '../controllers/destinationController'
import {
  createUser, getPopularTrippians
}
from '../controllers/userController'
import {
  getSignedRequest
}
from '../controllers/aws'
  // import { authController } from '../controllers/auth';
import destination from '../../../_planning/json-data-format/destination.json'
import trippian from '../../../_planning/json-data-format/trippian.json'
import popular from '../../../_planning/json-data-format/popular'

export default function (app) {
  // LANDING PAGE - GET POPULAR TRIPPIANS AND DESTINATIONS
  // app.get('/api/destination', getPopularDestinations)
  // app.get('/api/trippian', getPopularTrippians)
  app.get('/api/trippian', function (req, res) {
    res.send(popular.trippians)
  })
  app.get('/api/destination', function (req, res) {
    res.send(popular.destinations)
  })
  app.post('/api/users/:facebookId', createUser)
  app.post('/api/inquiry/:')
  app.get('/api/destination/:destinationId', function (req, res) {
    res.send(destination)
  })
  app.get('/api/trippian/:userId', function (req, res) {
    res.send(trippian)
  })

  // FACEBOOK AUTH
  // app.get('/auth/facebook', authController.facebook);
  // app.get('/auth/facebook/callback', authController.facebookCallback, authController.validate);

  // AMAZON S3
  app.get('/signS3', getSignedRequest)
}
