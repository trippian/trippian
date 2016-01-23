import Inquiry from '../db/models/inquiry'
import User from '../db/models/user'

export default {
  inquiryGet: (req, res, next) => {
    let userId = req.params.userId;
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
    let postDetails = req.body;
    let d = req.params;
    console.log(d,'.params')
    if (postDetails) {
      Inquiry.createInquiry()
    }
  }
}