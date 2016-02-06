import User from '../db/models/user'
import Rating from '../db/models/rating'

export default {
  userGet: (req, res, next) => {
    if (req.params.userId) {
      User.getUserById(req.params.userId)
        .then((user) => {
          if (user) {
            User.getUserPostedTrips(req.params.userId)
              .then((trips) => {
                user.trips = trips
                Rating.getAllUserRatings(req.params.userId)
                  .then((ratings) => {
                    user.reviews = ratings
                    res.json(user)
                  })
              })
          }
        })
        .catch((error) => {
          next(error)
        })
    }
  },
  userPost: (req, res, next) => {
    if(req.body) {
      User.createUser(req.body)
        .then(createdUser => {
          res.json(createdUser)
        })
    }
  },
  userPut: (req, res, next) => {
    if (req.params.userId && req.body) {
      User.updateUser(req.params.userId, req.body)
        .then((updatedUser) => {
          res.json(updatedUser)
        })
        .catch((error) => {
          next(error)
        })
    }
    if (req.query.cat === 'trippian' && req.params.userId) {
      User.becomeTrippian(req.params.userId)
        .then((trippian) => {
          res.json(trippian)
        })
        .catch((error) => {
          next(error)
        })
    }
  },
  userDelete: (req, res, next) => {
    if (req.params.userId) {
      User.deleteUser(req.params.userId)
        .then((deleted) => {
          if (deleted) {
            res.json(deleted)
          }
        })
        .catch((error) => {
          next(error)
        })
    }
  },
  trippianGet: (req, res, next) => {
    if (req.query.cat === 'popular') {
      User.getPopularTrippians()
        .then((trippians) => {
          if (trippians) {
            res.json(trippians)
          }
        })
        .catch((error) => {
          next(error)
        })
    } else {
      User.getAllTrippians()
        .then(trippians => {
          if (trippians) {
            res.json(trippians)
          }
        })
    }
  },
  allUserGet: (req, res, next) => {
    User.getAllUsers()
      .then(users => {
        res.json(users)
      })
      .catch(error => {
        next(error)
      })
  },
  userSaveTrip: (req, res, next) => {
    if (req.params.userId && req.query.tripId) {
      User.userSaveTrip(req.params.userId, req.query.tripId)
        .then(tripSaved => {
          res.json(tripSaved)
        })
        .catch(error => {
          next(error)
        })
    } 
  },
  deleteSavedTrip: (req, res, next) => {
    if (req.query.userId && req.query.tripId) {
      User.deleteSavedTrip(req.query.userId, req.query.tripId)
        .then(deleted => {
          res.json(deleted)
        })
        .catch(error => {
          next(error)
        })
    }
  }
}

