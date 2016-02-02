import {
  postDestination,
  postTrip, voteTrip,
  postUser,
  postTrippian,
  postInquiry,
  postReview,
  getTrippianById,
  getUserById,
  getDestinationById,
  getInquiryById,
  login, logout
}
from './reducers/apiTrippianReducer'

// will move the functions inside apiTrippianReducer into different files
export default {
  postDestination,
  postTrip, voteTrip,
  postUser,
  postTrippian,
  postInquiry,
  postReview,
  getTrippianById,
  getUserById,
  getDestinationById,
  getInquiryById,
  login, logout
}
