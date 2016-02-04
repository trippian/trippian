import Trip from '../db/models/trip'
import { getUserById } from '../db/models/user'

export default {
  tripPost: (req, res, next) => {
    if (req.params.userId && req.body) {
      Trip.createNewTrip(req.params.userId, req.body)
        .then((newTrip) => {
          if (newTrip) {
            // newTrip.userId
            console.log(newTrip)
            res.json(newTrip)
          }
        })
        .catch((error) => {
          next(error)
        })
    }
  },
  tripGet: (req, res, next) => {
    if (req.params.tripId) {
      Trip.getTripById(req.params.tripId)
        .then((trip) => {
          console.log(trip)
          if (req.query.includeUserInfo) {
            getUserById(trip.userId)
              .then(user => {
                trip.user = user
                res.json(trip)
              })
          } else {
            res.json(trip)
          }

        })
        .catch((error) => {
          next(error)
        })
    }
  },
  tripPut: (req, res, next) => {
    if (req.query.voteType && parseInt(req.body.userId) && req.params.tripId) {
      Trip.upOrDownvoteTrip(req.params.tripId, req.body.userId, req.query.voteType)
        .then((voted) => {
          console.log(voted)
          res.json(voted)
        })
        .catch((error) => {
          next(error)
        })
    }
    else if (req.params.tripId && req.body) {
      Trip.updateTrip(req.params.tripId, req.body)
        .then((updatedTrip) => {
          console.log(updatedTrip)
          res.json(updatedTrip)
        })
        .catch((error) => {
          next(error)
        })
    }

  },
  // tripPutVote: (req, res, next) => {

  // },
  tripDelete: (req, res, next) => {
    if (req.params.tripId) {
      Trip.deleteTrip(req.params.tripId)
        .then((deleted) => {
          if (deleted) {
            console.log(deleted)
            res.json(deleted)
          }
        })
        .catch((error) => {
          next(error)
        })
    }
  },
  allTripGet: (req, res, next) => {
    Trip.getAllTrips()
      .then(allTrips => {
        if (allTrips.length) {
          console.log(allTrips)
          res.json(allTrips)
        }
      })
      .catch(error => {
        next(error)
      })
  }
}