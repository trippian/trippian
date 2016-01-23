import Trip from '../db/models/trip'
import Destination from '../db/models/destination'
import _ from 'lodash'

export default {
  destinationPost: (req, res, next) => {
    let destinationDetails = req.body
    if (destinationDetails) {
      Destination.createDestination(destinationDetails)
        .then((createdDestination) => {
          if (createdDestination) {
            res.json(createdDestination)
          }
        })
        .catch((error) => {
          next(error)
        })
    }
  },
  destinationPut: (req, res, next) => {
    let destinationId = req.params.destinationId
    let destinationUpdateBody = req.body
    if (destinationUpdateBody && destinationId) {
      Destination.updateDestination(destinationUpdateBody, destinationId)
        .then((updatedDestination) => {
          if (updatedDestination) {
            res.json(updatedDestination)
          }
        })
        .catch((error) => {
          next(error)
        })
    }

  },
  destinationGet: (req, res, next) => {
    let destinationId = req.params.destinationId
    if (destinationId) {
      Destination.getDestinationById(destinationId)
        .then((destination) => {
          if (destination) {
            Trip.getAllTripsAtDestination(destination.destinationName)
              .then((trips) => {
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
        .catch((error) => {
          next(error)
        })
    }
  },
  destinationDelete: (req, res, next) => {
    let destinationId = req.params.destinationId
    if (destinationId) {
      Destination.deleteDestinationById(destinationId)
        .then((deleted) => {
          res.json(deleted)
        })
        .catch((error) => {
          next(error)
        })
    }
  },
  destinationGetNoParams: (req, res, next) => {
    if (req.query.popular) {
      Destination.getAllDestinations()
        .then((allDestinations) => {
          _.map(allDestinations, (destination) => {
            Trip.getAllTripsAtDestination(destination.destinationName)
              .then((tripsAtLocation) => {
                console.log(tripsAtLocation)
                // still working on this
              })
          })
        })
    }

    if (req.query.q) {
      Destination.getDestinationByName(req.query.q)
        .then((destination) => {
          if (destination) {
            Trip.getAllTripsAtDestination(destination.destinationName)
              .then((trips) => {
                if (trips) {
                  destination.popularTrips = trips
                  res.json(destination)
                }
                res.json(destination)
              })
          }
        })
        .catch((error) => {
          next(error)
        })
    }
  }
}
