import React from 'react'
import {
  Link
}
from 'react-router'

const AdminInquiryDetailWidget = ({
  senderId, receiverId, endDate, subject, mobile, content, startDate, email, personCount
}) => {
  return (
    <div>
     <h3> {name}</h3>
     <p><b>personCount:</b> {personCount}</p>
     <p><b>senderId:</b> {senderId}</p>
     <p><b>receiverId:</b> {receiverId}</p>
     <p><b>startDate:</b> {startDate}</p>
     <p><b>endDate:</b> {endDate}</p>
     <p><b>mobile:</b> {mobile}</p>
     <p><b>email:</b> {email}</p>
     <p><b>subject:</b> {subject}</p>
     <p><b>content:</b> {content}</p>
   </div>
  )
}
AdminInquiryDetailWidget.displayName = 'AdminInquiryDetailWidget'

export default AdminInquiryDetailWidget
