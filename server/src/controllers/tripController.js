import Trip from '../db/models/trip'

export default {
  tripPost: (req, res, next) => {
    if (req.params.userId && req.body) {
      Trip.createNewTrip(req.params.userId, req.body)
        .then((newTrip) => {
          if (newTrip) {
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
          res.json(trip)
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
          res.json(voted)
        })
        .catch((error) => {
          next(error)
        })
    }
    else if (req.params.tripId && req.body) {
      Trip.updateTrip(req.params.tripId, req.body)
        .then((updatedTrip) => {
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
            res.json(deleted)
          }
        })
        .catch((error) => {
          next(error)
        })
    }
  }
}