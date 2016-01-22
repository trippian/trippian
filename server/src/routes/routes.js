import express from 'express'
import { destinationPost, destinationGet, destinationPut, destinationDelete, getPopularDestinations } from '../controllers/destinationController'
import { createUser, getPopularTrippians } from '../controllers/userController'
import { getSignedRequest } from '../controllers/aws'
  // import { authController } from '../controllers/auth';
import destination from '../../../_planning/json-data-format/destination.json'
import trippian from '../../../_planning/json-data-format/trippian.json'
import popular from '../../../_planning/json-data-format/popular'

export default function (router) {
  // LANDING PAGE - GET POPULAR TRIPPIANS AND DESTINATIONS
  // router.get('/api/destination', getPopularDestinations)
  // router.get('/api/trippian', getPopularTrippians)
  router.get('/api/trippian', function (req, res) {
    res.send(popular.trippians)
  })
  // router.get('/api/destination', function (req, res) {
  //   res.send(popular.destinations)
  // })
  router.post('/api/users/:facebookId', createUser)
  router.post('/api/inquiry/:')
  // router.get('/api/destination/:destinationId', function (req, res) {
  //   res.send(destination)
  // })
  router.get('/api/trippian/:userId', function (req, res) {
    res.send(trippian)
  })

  // routes for destination
  router.post('/api/destination', destinationPost)
  // separate route to get popular destinations
  // router.get('/api/destination', getPopularDestinations)
  router.get('/api/destination/:destinationId', destinationGet)
  router.put('/api/destination/:destinationId', destinationPut)
  router.delete('/api/destination/:destinationId', destinationDelete)

  // routes for users

  // routes for 

  // AMAZON S3
  router.get('/signS3', getSignedRequest)
}
