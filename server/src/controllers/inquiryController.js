import Inquiry from '../db/models/inquiry'
import User from '../db/models/user'

export default {
  inquiryGet: function (req, res, next) {
    let userId = req.params.userId;
    if (userId) {
      User.getUserByParameter("id", userId)
        .then(function(inquiry) {
          Inquiry.getAllInquiriesForTrippian(userId)
          if (inquiry) {
            res.json(inquiry)
          }
        })
        .catch(function (error) {
          next(error)
        })
    }
  }
}