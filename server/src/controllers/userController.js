import User from '../db/models/user'

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
                res.json(user)
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
          res.json(updatedUser)
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
    if (req.query.popular) {
      User.getPopularTrippians()
        .then((trippians) => {
          if (trippians) {
            res.json(trippians)
          }
        })
        .catch((error) => {
          next(error)
        })
    }
  }
}

