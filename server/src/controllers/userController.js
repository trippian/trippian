import User from '../db/models/user'
import Rating from '../db/models/rating'

// export const getPopularTrippians = function(req, res, next) {
// 	let trippianId = req.body.id

// 	User.getPopularTrippians()
//     .then(function(trippians) {
//       if (trippians) {
//         // console.log('this is the popular trippians: ', trippians);
//         res.json(trippians)
//       } else {
//         res.status(401).send();
//       }
//     })
//     .catch(function(error) {
//       next(error);
//     });
// }

// export const createUser = function(req, res, next) {
//   let facebookId = req.params.facebookId;

//   User.createUser(facebookId)
//     .then(function(user) {
//       if (user) {
//         res.json(user);
//       } else {
//         res.status(401).send();
//       }
//     })
//     .catch(function(error) {
//       next(error);
//     });
// }

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
                    console.log(user)
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
  userPut: (req, res, next) => {
    console.log(req.body)
    if (req.params.userId && req.body) {
      User.updateUser(req.params.userId, req.body)
        .then((updatedUser) => {
          console.log(updatedUser)
          res.json(updatedUser)
        })
        .catch((error) => {
          next(error)
        })
    }
    if (req.query.cat === 'trippian' && req.params.userId) {
      User.becomeTrippian(req.params.userId)
        .then((trippian) => {
          console.log(trippian)
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
            console.log(deleted)
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
            console.log(trippians)
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
            console.log(trippians)
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
  }
}

