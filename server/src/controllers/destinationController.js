import Trip from '../db/models/trip'
import Destination from '../db/models/destination'

export default {
  destinationPost: function(req, res, next) {
    let destinationDetails = req.body
    if (destinationDetails) {
      Destination.createdDestination(destinationDetails)
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
    if (destinationUpdateBody && destinationId) {
      Destination.updateDestination(destinationUpdateBody, destinationId)
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
          Trip.getAllTripsAtDestination(destination[0].destinationName)
            .then(function(trips) {
              if (trips) {
                // append an array with all popular trips to destinations
                destination[0].popularTrips = trips
                // want to send back the destination object in the object
                res.json(destination[0])
              }
              res.json(destination[0])
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
