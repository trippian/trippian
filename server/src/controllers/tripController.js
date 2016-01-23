import Trip from '../db/models/trip'

export default {
  tripPost: function(req, res, next) {
    if (req.params.userId && req.body) {
      Trip.createNewTrip(req.params.userId, req.body)
        .then(function(newTrip) {
          if (newTrip) {
            res.json(newTrip)
          }
        })
        .catch(function(error) {
          next(error)
        })
    }
  },
  tripGet: function(req, res, next) {
    // if (req.params.tripId) {
    //   Trip.
    // }
  }
}