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
    let postDetails = req.body 
    let trippianId = req.params.trippianId 
    let userId = req.body.id 
    if (postDetails) {
      Inquiry.createInquiry(userId, trippianId, postDetails)
        .then(() => {
          res.json(postDetails)
       })
        .catch((error) => {
          next(error)
        })
    }
  },
  inquiryDelete: function(req, res, next ) {
    let inquiryId = req.params.inquiryId
    if (inquiryId) {
      Inquiry.deleteInquiry(inquiryId)
        .then(function(deleted) {
          res.json(deleted)
        })
        .catch(function(error) {
          next(error)
        })
    }
  }
}