import log from '../log'
import {
  getAdminDestinations,
  getAdminDestinationById,
  deleteAdminDestinationById,

  getAdminTrippians,
  getAdminTrippianById,
  deleteAdminTrippianById,

  getAdminUsers,
  getAdminUserById,
  deleteAdminUserById,

  getAdminTrips,
  getAdminTripById,
  deleteAdminTripById,

  getAdminInquiries,
  getAdminInquiryById,
  deleteAdminInquiryById
}
from './reducers/apiAdminReducer'

// will move the functions inside apiAdminReducer into different files

export default {
  getAdminDestinations,
  getAdminDestinationById,
  deleteAdminDestinationById,

  getAdminTrippians,
  getAdminTrippianById,
  deleteAdminTrippianById,

  getAdminUsers,
  getAdminUserById,
  deleteAdminUserById,

  getAdminTrips,
  getAdminTripById,
  deleteAdminTripById,

  getAdminInquiries,
  getAdminInquiryById,
  deleteAdminInquiryById

}
