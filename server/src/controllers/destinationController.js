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
            Trip.getAllTripsAtDestination(destinationId)
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
    if (req.query.cat === 'popular') {
      console.log('hitting this')
      // Destination.getAllDestinations()
      //   .then((allDestinations) => {
      //     console.log(allDestinations)
      //     res.json(_.sortBy(allDestinations, (destination) => {
      //       // we want to add a property, totalTrips to all destinations to see which one currently has the most trips or the most popular
      //       Trip.getAllTripsAtDestination(destination.id)
      //         .then((tripsAtLocation) => {
      //           destination.totalTrips = tripsAtLocation.length
      //           return destination.totalTrips
      //         })
      //     }))
        // })
      Destination.getPopularDestinations()
        .then((popularDestinations) => {
          if (popularDestinations) {
            // need to return just the destinations and not the count(r)
            res.json(_.map(popularDestinations, (val) => {
              return val.d
            }))
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
// if there is a get request with a query string, we want to search for the destination and if it does not exist, we create it
    if (req.query.q) {
      Destination.getDestinationByName(req.query.q)
        .then((destination) => {
          if (destination) {
            Trip.getAllTripsAtDestination(destination.id)
              .then((trips) => {
                if (trips) {
                  destination.popularTrips = trips
                  res.json(destination)
                }
                res.json(destination)
              })
          } else {
            Destination.createDestination({
              destinationName: req.query.q
            })
              .then((createdDestination) => {
                res.json(createdDestination)
              })
          }
        })
        .catch((error) => {
          next(error)
        })
    }
  }
}
