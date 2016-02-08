import {
  getPopularDestinations, getPopularTrippians,
  deleteInquiryById,
  postDestination, putDestination,
  postTrip, voteTrip, deleteTripById, toggleSaveTrip, getTripById, putTrip,
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
  postDestination, putDestination,
  postTrip, voteTrip, deleteTripById, toggleSaveTrip, getTripById, putTrip,
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
