import Trip from '../db/models/trip'
import Destination from '../db/models/destination'

export default {
  destinationPost: function(req, res, next) {
    let destinationName = req.query.destinationName 
    if (destinationName) {
      Destination.createDestination(destinationName)
        .then(function(destination) {
          if (destination) {
            res.json(destination)
          } res.status(401).send()
        })
        .catch(function(error) {
          next(error)
        })
    }
  },
  destinationPut: function(req, res, next) {

  },
  destinationGet: function(req, rest, next) {

  },
  destinationDelete: function(req, res, next) {
    
  }
}
