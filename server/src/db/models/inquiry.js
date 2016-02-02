import Promise from 'bluebird'
import db from '../db'
import { updateStringObject } from '../../middleware/utils'
import nodemailer from 'nodemailer'
import User from './user'
require('dotenv').config()

// using node mailer to send notifications when an inquiry is 
// recieved
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_ACCOUNT,
    pass: process.env.GMAIL_PWD
  }
})

export default {
  // function for a user to create an inquiry
  createInquiry: (senderId, receiverId, inquiryProps) => {
    inquiryProps.createdAt = Date()
    inquiryProps.receiverId = receiverId
    return new Promise((resolve, reject) => {
      if (senderId === receiverId) {
        reject(new Error('user cannot make inquiry to self'))
      } else {
        db.relateAsync(senderId, 'INQUIRY', receiverId, inquiryProps)
          .then((inquiry) => {
            if (inquiry) {
              // when inquiry is made, we want to send an email 
              // notification to the trippian that they have a 
              // new inquiry
              User.getUserById(receiverId)
                .then(user => {
                  let mailOptions = {
                    from: 'Trippian <trippianApp@gmail.com',
                    to: user.email,
                    subject: 'You have received a new inquiry!',
                    text: `You have received a new inquiry from ${inquiry.properties.email}. Go check your
                    inquiries!`,
                    html: `<p>${inquiry.properties.email} has sent you an inquiry for ${inquiry.properties.personCount} people. Go check it out!`
                  }
                  // sending the email using nodemailer
                  transporter.sendMail(mailOptions, function(err, info) {
                    if (err) {
                      console.error(err)
                    } else {
                      resolve(inquiry)
                    }                    
                  })
                })

              // resolve(inquiry)
            } else {
              reject(new Error('inquiry could not be sent'))
            }
          })
      }
    })
  },
  // function that gets back all the inquiries given a trippian id
  getAllInquiriesForUser: (userId) => {
    return new Promise((resolve, reject) => {
      db.relationshipsAsync(userId, 'all', 'INQUIRY')
        .then((inquiries) => {
          if (inquiries) {
            resolve(inquiries)
          } else {
            reject(new Error('user has no inquiries at this time'))
          } 
        })
    })
  },
  getAllInquiries: () => {
    return new Promise((resolve, reject) => {
      let cypher = `match ()-[i:INQUIRY]->() return i`
      db.queryAsync(cypher)
        .then(allInquiries => {
          if (allInquiries.length) {
            resolve(allInquiries)
          }
        })
        .catch(error => {
          console.error(error)
        })
    })
  },
  // function that deletes the inquiry from db if trippian rejects the request
  deleteInquiry: (inquiryId) => {
    return new Promise((resolve, reject) => {
      let cypher = `match (u:User)-[r:INQUIRY]->() where id(r)=${inquiryId} delete r;`
      db.queryAsync(cypher)
        .then((deleted) => {
          if (deleted) {
            resolve(deleted)
          } else {
            reject(new Error('inquiry was not deleted or does not exist'))
          }
        })
    })
  },
  // function for trippians to accept inquiry on put request
  acceptInquiry: (inquiryId) => {
    return new Promise((resolve, reject) => {
      let cypher = `match (u1:User)-[r:INQUIRY]->(u2:User) where id(r)=${inquiryId} create (u2)-[t:TOURED]->(u1) set t = r return t`
      db.queryAsync(cypher) 
        .then((touredRelationship) => {
          if (touredRelationship) {
            resolve(touredRelationship)
          } else {
            reject(new Error('inquiry could not be accepted or does not exist'))
          }
        })
    })
  },
  updateInquiry: (details, inquiryId) => {
    let updateString = updateStringObject(details, '')
    return new Promise((resolve, reject) => {
      let cypher = `match ()-[r:INQUIRY]->() where id(r)=${inquiryId} set r += {${updateString}} return r;`
      db.queryAsync(cypher)
        .then((updatedInquiry) => {
          if (updatedInquiry) {
            resolve(updatedInquiry)
          } else {
            reject(new Error('inquiry could not be updated'))
          }
        })
        .catch(function(error) {
          console.error(error)
        })
    })
  }
}
