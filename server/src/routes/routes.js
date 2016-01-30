import destinationController from '../controllers/destinationController'
import tripController from '../controllers/tripController'
import userController from '../controllers/userController'
import inquiryController from '../controllers/inquiryController'
import ratingController from '../controllers/ratingController'
import chatController from '../controllers/chatController'
import { getSignedRequest } from '../controllers/aws'
import dashboardController from '../controllers/dashboardController'
  // import { authController } from '../controllers/auth';

// import destination from '../../../_planning/json-data-format/destination.json'
// import trippian from '../../../_planning/json-data-format/trippian.json'
// import popular from '../../../_planning/json-data-format/popular'

export default function (router) {
  // LANDING PAGE - GET POPULAR TRIPPIANS AND DESTINATIONS
  // router.get('/api/destination', getPopularDestinations)
  // router.get('/api/trippian', getPopularTrippians)
  // router.get('/api/trippian', function (req, res) {
  //   res.sendst(popular.trippians)
  // })
  // router.get('/api/destination', function (req, res) {
  //   res.send(popular.destinations)
  // })
  // router.post('/api/users/:facebookId', createUser)
  // router.post('/api/inquiry/:')
  // router.get('/api/destination/:destinationId', function (req, res) {
  //   res.send(destination)
  // })
  // router.get('/api/trippian/:userId', function (req, res) {
  //   res.send(trippian)
  // })
  
  // routes for chats
  router.get('/api/chats', chatController.chatGet)
  router.post('/api/chats', chatController.chatPost)

  // routes for destination
  router.post('/api/destination', destinationController.destinationPost)
  // separate route to get popular destinations
  router.get('/api/destination/:destinationId', destinationController.destinationGet)
  router.put('/api/destination/:destinationId', destinationController.destinationPut)
  router.delete('/api/destination/:destinationId', destinationController.destinationDelete)

  // routes for users
  router.get('/api/user/:userId', userController.userGet)
  router.post('/api/user', userController.userPost)
  router.put('/api/user/:userId', userController.userPut)
  router.delete('/api/user/:userId', userController.userDelete)

  // routes for trips
  router.post('/api/trip/:userId', tripController.tripPost)
  router.get('/api/trip/:tripId', tripController.tripGet)
  router.put('/api/trip/:tripId', tripController.tripPut)
  router.delete('/api/trip/:tripId', tripController.tripDelete)

  //routes for inquiries
  router.get('/api/inquiry/:userId', inquiryController.inquiryGet)
  router.post('/api/inquiry/:trippianId', inquiryController.inquiryPost)
  router.put('/api/inquiry/:inquiryId', inquiryController.inquiryPut)
  router.delete('/api/inquiry/:inquiryId', inquiryController.inquiryDelete)

  //routes for users to rate each other
  router.post('/api/rating/:userId', ratingController.ratingPost)
  router.get('/api/rating/:userId', ratingController.ratingGet)

  //special routes for only admin
  router.delete('/api/rating/:ratingId', ratingController.ratingDelete)
  router.get('/api/inquiry', inquiryController.allInquiryGet)
  router.get('/api/trip', tripController.allTripGet)
  router.get('/api/user', userController.allUserGet)
  router.get('/api/trippian', userController.trippianGet)
  router.get('/api/destination', destinationController.destinationGetNoParams)

  //routes for users to save trips
  router.post('/api/saveTrip/:userId', userController.userSaveTrip)
  router.delete('/api/saveTrip', userController.deleteSavedTrip)

  //route for getting all information needed on a user dashboard
  router.get('/api/dashboard/:userId', dashboardController.dashboardGet)

  // AMAZON S3
  router.get('/signS3', getSignedRequest)
}
