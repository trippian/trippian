import Trip from '../db/models/trip'
import Destination from '../db/models/destination'
import _ from 'lodash'

export default {
  destinationPost: function(req, res, next) {
    let destinationDetails = req.body
    if (destinationDetails) {
      Destination.createDestination(destinationDetails)
        .then(function(createdDestination) {
          if (createdDestination) {
            res.json(createdDestination)
          }
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
    console.log('nah im here in destination get bitch')
    let destinationId = req.params.destinationId
    if (destinationId) {
      Destination.getDestinationById(destinationId)
        .then(function(destination) {
          if (destination) {
            Trip.getAllTripsAtDestination(destination.destinationName)
              .then(function(trips) {
                if (trips) {
                  // append an array with all popular trips to destinations
                  destination.popularTrips = trips
                  // want to send back the destination object in the object
                  res.json(destination)
                }
                res.json(destination)
              })
          }
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
  },
  getPopularDestinations: function(req, res, next) {
    console.log(req.query.q)
    console.log(req.query.popular) 
    if (req.query.popular) {
      Destination.getAllDestinations()
        .then(function(allDestinations) {
          console.log(allDestinations)
          _.map(allDestinations, function(destination) {
            Trip.getAllTripsAtDestination(destination.destinationName)
              .then(function(tripsAtLocation) {
                console.log(tripsAtLocation)
              })
          })
        })
    }

    if (req.query.q) {
      Destination.getDestinationByName(req.query.q)
        .then(function(destination) {
          if (destination) {
            Trip.getAllTripsAtDestination(destination.destinationName)
              .then(function(trips) {
                if (trips) {
                  destination.popularTrips = trips
                  res.json(destination)
                }
                res.json(destination)
              })
          }
        })
        .catch(function(error) {
          next(error)
        })
    }
  }
}
