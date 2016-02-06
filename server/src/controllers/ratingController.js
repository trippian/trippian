import Rating from '../db/models/rating'

export default {
  ratingPost: (req, res, next) => {
    if (req.params.userId && req.body && req.query.rater) {
      req.body.rating = parseInt(req.body.rating)
      Rating.createRating(req.query.rater, req.params.userId, req.body)
        .then((rating) => {
          res.json(rating)
        })
        .catch(error => {
          next(error)
        })
    }
  },
  ratingGet: (req, res, next) => {
    if (req.params.userId) {
      Rating.getAllUserRatings(req.params.userId)
        .then((ratings) => {
          res.json(ratings)
        })
        .catch(error => {
          next(error)
        })
    }
  },
  ratingDelete: (req, res, next) => {
    if (req.params.ratingId) {
      Rating.deleteRating(req.params.ratingId)
        .then(deleted => {
          res.json(deleted)
        })
        .catch(error => {
          next(error)
        })
    }
  }
}