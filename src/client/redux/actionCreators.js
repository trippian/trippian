import {
  SET_LOCALE, SET_LOCALE_MESSAGES, SET_USERNAME, SET_DISPLAYNAME, SET_ALERT,

  SET_DESTINATIONS, SET_DESTINATION, ADD_DESTINATION, GET_DESTINATIONS_FAIL, REMOVE_DESTINATION,

  SET_TRIPPIANS, GET_TRIPPIANS, GET_TRIPPIAN_BY_ID, REMOVE_TRIPPIAN, SET_TRIPPIAN,

  ADD_REVIEW, SET_INQUIRY, SET_TRIP, UPDATE_VOTE,

  SET_ADMIN_DESTINATIONS, ADD_ADMIN_DESTINATION, REMOVE_ADMIN_DESTINATION, SET_ADMIN_CURRENT_DESTINATION,
  SET_ADMIN_TRIPPIANS, ADD_ADMIN_TRIPPIAN, REMOVE_ADMIN_TRIPPIAN, SET_ADMIN_CURRENT_TRIPPIAN,
  SET_ADMIN_USERS, ADD_ADMIN_USER, REMOVE_ADMIN_USER, SET_ADMIN_CURRENT_USER,
  SET_ADMIN_TRIPS, ADD_ADMIN_TRIP, REMOVE_ADMIN_TRIP, SET_ADMIN_CURRENT_TRIP,
  SET_ADMIN_INQUIRIES, ADD_ADMIN_INQUIRY, REMOVE_ADMIN_INQUIRY, SET_ADMIN_CURRENT_INQUIRY
}

from './actionTypes'

// appState related
export function setLocale(locale) {
  return {
    type: SET_LOCALE,
    payload: {
      locale
    }
  }
}
export function setUsername(username) {
  return {
    type: SET_USERNAME,
    payload: {
      username
    }
  }
}
export function setLocaleMessages(messages) {
  return {
    type: SET_LOCALE_MESSAGES,
    payload: {
      messages
    }
  }
}

export function setDisplayName(displayName) {
  return {
    type: SET_DISPLAYNAME,
    payload: {
      displayName
    }
  }
}
export function setAlert(alert = {
  type: 'success',
  title: '',
  message: ''
}) {
  return {
    type: SET_ALERT,
    payload: {
      alert
    }
  }
}

//***************************************
//**** apiTrippian related  *************
//***************************************

// general 
export function apologize(errorMessage) {
  return {
    type: GET_DESTINATIONS_FAIL,
    payload: {
      errorMessage
    }
  }
}
// trippian 
export function setTrippians(trippians) {
  return {
    type: SET_TRIPPIANS,
    payload: {
      trippians
    }
  }
}
export function removeTrippian(id) {
  return {
    type: GET_TRIPPIANS,
    payload: {
      id
    }
  }
}
// Users


// destination 
export function setDestinations(destinations) {
  return {
    type: SET_DESTINATIONS,
    payload: {
      destinations
    }
  }
}
export function setDestination(destination) {
  return {
    type: SET_DESTINATION,
    payload: {
      destination
    }
  }
}

export function removeDestination(id) {
  return {
    type: REMOVE_DESTINATION,
    payload: {
      id
    }
  }
}

export function addDestination(destination) {
  return {
    type: ADD_DESTINATION,
    payload: {
      destination
    }
  }
}
// Trippian

export function setTrippian(trippian) {
  return {
    type: SET_TRIPPIAN,
    payload: {
      trippian
    }
  }
}

//review 
export function addReview(review) {
  return {
    type: ADD_REVIEW,
    payload: {
      review
    }
  }
}

//Inquiry
export function setInquiry(inquiry) {
  return {
    type: SET_INQUIRY,
    payload: {
      inquiry
    }
  }
}
//trip
export function setTrip(trip) {
  return {
    type: SET_TRIP,
    payload: {
      trip
    }
  }
}
export function updateVote(vote = 1, tripId) {
  return {
    type: UPDATE_VOTE,
    payload: {
      vote: vote,
      tripId: tripId
    }
  }
}

//*********************************
//**** admin related  *************
//*********************************

// destination 
export function setAdminDestinations(destinations) {
  return {
    type: SET_ADMIN_DESTINATIONS,
    payload: {
      destinations
    }
  }
}
export function addAdminDestination(destination) {
  return {
    type: ADD_ADMIN_DESTINATION,
    payload: {
      destination
    }
  }
}
export function removeAdminDestination(id) {
  return {
    type: REMOVE_ADMIN_DESTINATION,
    payload: {
      id
    }
  }
}

export function setAdminCurrentDestination(destination) {
  return {
    type: SET_ADMIN_CURRENT_DESTINATION,
    payload: {
      destination
    }
  }
}

// trippian 
export function setAdminTrippians(trippians) {
  return {
    type: SET_ADMIN_TRIPPIANS,
    payload: {
      trippians
    }
  }
}
export function addAdminTrippian(trippian) {
  return {
    type: ADD_ADMIN_TRIPPIAN,
    payload: {
      trippian
    }
  }
}
export function removeAdminTrippian(id) {
  return {
    type: REMOVE_ADMIN_TRIPPIAN,
    payload: {
      id
    }
  }
}

export function setAdminCurrentTrippian(trippian) {
  return {
    type: SET_ADMIN_CURRENT_TRIPPIAN,
    payload: {
      trippian
    }
  }
}

// user 
export function setAdminUsers(users) {
  return {
    type: SET_ADMIN_USERS,
    payload: {
      users
    }
  }
}
export function addAdminUser(user) {
  return {
    type: ADD_ADMIN_USER,
    payload: {
      user
    }
  }
}
export function removeAdminUser(id) {
  return {
    type: REMOVE_ADMIN_USER,
    payload: {
      id
    }
  }
}

export function setAdminCurrentUser(user) {
  return {
    type: SET_ADMIN_CURRENT_USER,
    payload: {
      user
    }
  }
}

// trip 
export function setAdminTrips(trips) {
  return {
    type: SET_ADMIN_TRIPS,
    payload: {
      trips
    }
  }
}
export function addAdminTrip(trip) {
  return {
    type: ADD_ADMIN_TRIP,
    payload: {
      trip
    }
  }
}
export function removeAdminTrip(id) {
  return {
    type: REMOVE_ADMIN_TRIP,
    payload: {
      id
    }
  }
}

export function setAdminCurrentTrip(trip) {
  return {
    type: SET_ADMIN_CURRENT_TRIP,
    payload: {
      trip
    }
  }
}

// inquiry
export function setAdminInquiries(inquiries) {
  return {
    type: SET_ADMIN_INQUIRIES,
    payload: {
      inquiries
    }
  }
}
export function addAdminInquiry(inquiry) {
  return {
    type: ADD_ADMIN_INQUIRY,
    payload: {
      inquiry
    }
  }
}
export function removeAdminInquiry(id) {
  return {
    type: REMOVE_ADMIN_INQUIRY,
    payload: {
      id
    }
  }
}

export function setAdminCurrentInquiry(inquiry) {
  return {
    type: SET_ADMIN_CURRENT_INQUIRY,
    payload: {
      inquiry
    }
  }
}
