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
    // if (req.params.tripId) {
    //   Trip.
    // }
  },
  tripPut: (req, res, next) => {

  },
  tripPutVote: (req, res, next) => {

  },
  tripDelete: (req, res, next) => {
    
  }
}