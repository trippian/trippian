import Trip from '../db/models/trip'
import Destination from '../db/models/destination'

export default {
  destinationPost: function(req, res, next) {
    let destinationDetails = req.body
    if (destinationDetails) {
      Destination.createOrUpdateDestination(destinationDetails)
        .then(function(createdDestination) {
          if (createdDestination) {
            res.json(createdDestination)
          } res.status(401).send()
        })
        .catch(function(error) {
          next(error)
        })
    }
  },
  destinationPut: function(req, res, next) {
    let destinationId = req.params.destinationId
    let destinationUpdateBody = req.body
    destinationUpdateBody.id = parseInt(destinationId)
    if (destinationUpdateBody) {
      Destination.createOrUpdateDestination(destinationUpdateBody)
        .then(function(updatedDestination) {
          if (updatedDestination) {
            res.json(updatedDestination)
          }
        })
        .catch(function(error) {
          next(error)
        })
    }

  },
  destinationGet: function(req, res, next) {
    let destinationId = req.params.destinationId
    if (destinationId) {
      Destination.getDestinationById(destinationId)
        .then(function(destination) {
          Trip.getAllTripsAtDestination(destination.destinationName)
            .then(function(trips) {
              destination.popularTrips = trips
              res.json(destination)
            })
        })
        .catch(function(error) {
          next(error)
        })
    }
  },
  destinationDelete: function(req, res, next) {
    let destinationId = req.params.destinationId
    if (destinationId) {
      Destination.deleteDestinationById(destinationId)
        .then(function(deleted) {
          res.json(deleted)
        })
        .catch(function(error) {
          next(error)
        })
    }
  }
}
