import Inquiry from '../db/models/inquiry'
import User from '../db/models/user'

export default {
  inquiryGet: (req, res, next) => {
    let userId = req.params.userId
    if (userId) {
      User.getUserByParameter('id', userId)
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
  inquiryPut: function(req,res, next) { 
    //3 cases
    //1) trippee updates inquiry
    //2) trippian accepts
    //3) trippian declines
    let putDetails = req.body
    let inquiryId = req.params.inquiryId
    let accept = req.query.accept
    console.log(accept)
    if (putDetails && !accept) { //case 1
      console.log('shit')
      Inquiry.updateInquiry(putDetails, inquiryId)
        .then(function(putDetails) {
          res.json(putDetails)
        })
        .catch(function(error) {
          next (error)
        })
    } else if (accept) { //trippian accepts
      console.log('true')
      Inquiry.acceptInquiry(inquiryId, accept)
        .then(function(inquiry) {
          res.json(inquiry)
        })
        .catch(function(error) {
          next(error)
        })
    } else if (!accept) { //trippian declines inquiry
      console.log('false')
      Inquiry.acceptInquiry(inquiryId, accept)
        .then(function(inquiry) {
          res.json(inquiry)
        })
        .catch(function(error) {
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