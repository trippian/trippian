import Inquiry from '../db/models/inquiry'
import User from '../db/models/user'

export default {
  inquiryGet: (req, res, next) => {
    let userId = req.params.userId
    if (userId) {
      User.getUserByParameter("id", userId)
        .then((inquiry) => {
          Inquiry.getAllInquiriesForTrippian(userId)
          if (inquiry) {
            res.json(inquiry)
          }
        })
        .catch((error) => {
          next(error)
        })
    }
  },
  inquiryPost: function(req, res, next) {
    let postDetails = req.body //object being passed around
    let trippianId = req.params.trippianId //trippian reciving inquiry
    let userId = req.body.id //somehow have to know who's currently logged in and set that as tripeeId
    if (postDetails) {
      Inquiry.createInquiry(userId, trippianId, postDetails)
        .then(() => {
          res.json(postDetails)
       })
        .catch((error) => {
          next(error)
        })
    }
  }
}