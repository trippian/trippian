import Rating from '../db/models/rating'

export default {
  ratingPost: (req, res, next) => {
    if (req.params.userId && req.body && req.query.rater) {
      Rating.createRating(req.query.rater, req.params.userId, req.body)
        .then((rating) => {
          console.log(rating)
          res.json(rating)
        })
    }
  },
  ratingGet: (req, res, next) => {

  },
  ratingDelete: (req, res, next) => {

  }
}