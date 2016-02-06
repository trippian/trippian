import Inquiry from '../db/models/inquiry'
import User from '../db/models/user'

export default {
  dashboardGet: (req, res, next) => {
    if (req.params.userId) {
      User.getUserById(req.params.userId)
        .then(user => {
          Inquiry.getAllInquiriesForUser(req.params.userId)
            .then(inquiries => {
              user.inquiries = inquiries
              User.getUserSavedTrips(req.params.userId)
                .then(savedTrips => {
                  user.savedTrips = savedTrips
                  User.getUserPostedTrips(req.params.userId)
                    .then(postedTrips => {
                      user.postedTrips = postedTrips
                      User.getUserUpvotedTrips(req.params.userId)
                        .then(upvotedTrips => {
                          user.upVotedTrips = upvotedTrips
                          User.getUserDownvotedTrips(req.params.userId)
                            .then(downvotedTrips => {
                              user.downVotedTrips = downvotedTrips
                              res.json(user)
                            })
                        })
                        .catch(error => {
                          next(error)
                        })
                    })
                    .catch(error => {
                      next(error)
                    })
                })
                .catch(error => {
                  next(error)
                })
            })
            .catch(error => {
              next(error)
            })
        })
    }
  }
}
