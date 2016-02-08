import {
  getPopularDestinations, getPopularTrippians,
  deleteInquiryById,
  postDestination,
  postTrip, voteTrip, deleteTripById, toggleSaveTrip, getTripById,
  postUser,
  postTrippian, putTrippian,
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
  getPopularDestinations, getPopularTrippians,
  deleteInquiryById,
  postDestination,
  postTrip, voteTrip, deleteTripById, toggleSaveTrip, getTripById,
  postUser,
  postTrippian, putTrippian,
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
