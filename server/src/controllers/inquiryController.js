import Inquiry from '../db/models/inquiry'
import User from '../db/models/user'

export default {
  inquiryGet: (req, res, next) => {
    let userId = req.params.userId
    if (userId) {
      User.getUserById(userId)
        .then((user) => {
          if (user) {
            Inquiry.getAllInquiriesForTrippian(userId)
              .then((inquiries) => {
                console.log(inquiries)
                if(inquiries.length) {
                  res.json(inquiries)
                }
              })
          }
        })
    }
  },
  inquiryPost: (req, res, next) => {
    let postDetails = req.body
    let trippianId = req.params.trippianId 
    let userId = req.body.userId 
    if (postDetails) {
      Inquiry.createInquiry(userId, trippianId, postDetails)
        .then((createdInquiry) => {
          console.log(createdInquiry)
          res.json(createdInquiry)
        })
        .catch((error) => {
          next(error)
        })
    }
  },
  inquiryPut: (req,res, next) => { 
    let putDetails = req.body
    let inquiryId = req.params.inquiryId
    let accept = req.query.cat
    if (putDetails && inquiryId) { //update inquiry
      Inquiry.updateInquiry(putDetails, inquiryId)
        .then((updatedInquiry) => {
          console.log(updatedInquiry)
          res.json(updatedInquiry)
        })
        .catch((error) => {
          next (error)
        })
    } 
    if (inquiryId && accept) { //trippian accepts
      Inquiry.acceptInquiry(inquiryId)
        .then((accepted) => {
          if (accepted) {
            Inquiry.deleteInquiry(inquiryId)
              .then((deleted) => {
                console.log(accepted)
                res.json(accepted)
              })
          }
        })
        .catch((error) => {
          next(error)
        })
    }
  },
  inquiryDelete: (req, res, next ) => {
    let inquiryId = req.params.inquiryId
    if (inquiryId) {
      Inquiry.deleteInquiry(inquiryId)
        .then((deleted) => {
          console.log(deleted)
          res.json(deleted)
        })
        .catch((error) => {
          next(error)
        })
    }
  }
}