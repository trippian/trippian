import {
  deleteInquiryById,
  postDestination,
  postTrip, voteTrip, deleteTripById, toggleSaveTrip, getTripById,
  postUser,
  postTrippian,
  postInquiry,
  postReview,
  getTrippianById,
  getUserById,
  getDestinationById, getDestinationByName,
  getInquiryById,
  login, logout, localLogin, localSignup,
  getDashboardById,
  setSearchText
}
from './reducers/apiTrippianReducer'

// will move the functions inside apiTrippianReducer into different files
export default {
  deleteInquiryById,
  postDestination,
  postTrip, voteTrip, deleteTripById, toggleSaveTrip, getTripById,
  postUser,
  postTrippian,
  postInquiry,
  postReview,
  getTrippianById,
  getUserById,
  getDestinationById, getDestinationByName,
  getInquiryById,
  login, logout, localLogin, localSignup,
  getDashboardById,
  setSearchText
}
