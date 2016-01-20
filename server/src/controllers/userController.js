import User from '../db/models/user';

export const getPopularTrippians = function(req, res, next) {
	let trippianId = req.body.id;

	User.getPopularTrippians
    .then(function(trippians) {
      if (trippians) {
        // console.log('this is the popular trippians: ', trippians);
        res.json(trippians);
      } else {
        res.status(401).send();
      }
    })
    .catch(function(error) {
      next(error);
    });
}

export const createUser = function(req, res, next) {
  let facebookId = req.params.facebookId;

  User.createUser(facebookId)
    .then(function(user) {
      if (user) {
        res.json(user);
      } else {
        res.status(401).send();
      }
    })
    .catch(function(error) {
      next(error);
    });
}
