import {
  SET_DESTINATIONS, ADD_DESTINATION,
  SET_TRIPPIANS, GET_DESTINATIONS_FAIL, GET_DESTINATION_BY_ID, GET_TRIPPIAN_BY_ID, GET_DESTINATIONS, GET_TRIPPIANS,
  SET_LOCALE, SET_LOCALE_MESSAGES, SET_USERNAME, SET_DISPLAYNAME,
  SET_ADMIN_DESTINATIONS, SET_ADMIN_TRIPPIANS, ADD_ADMIN_DESTINATION,
  REMOVE_ADMIN_DESTINATION, REMOVE_DESTINATION,
  SET_ADMIN_CURRENT_DESTINATION
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

// apiTrippian related
export function setDestinations(destinations) {
  return {
    type: SET_DESTINATIONS,
    payload: {
      destinations
    }
  }
}

export function setTrippians(trippians) {
  return {
    type: SET_TRIPPIANS,
    payload: {
      trippians
    }
  }
}

export function apologize(errorMessage) {
  return {
    type: GET_DESTINATIONS_FAIL,
    payload: {
      errorMessage
    }
  }
}

// admin related
export function setAdminDestinations(destinations) {
  return {
    type: SET_ADMIN_DESTINATIONS,
    payload: {
      destinations
    }
  }
}

export function setAdminTrippians(trippians) {
  return {
    type: SET_ADMIN_TRIPPIANS,
    payload: {
      trippians
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
export function removeDestination(id) {
  return {
    type: REMOVE_DESTINATION,
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
