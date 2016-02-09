import log from '../../log'
import {
  setDestinations, addDestination, addAdminDestination, setDestination,
  setTrippians, addTrippian, addAdminTrippian,
  setUsers, addUser, addAdminUser,
  setInquirys, addInquiry, addAdminInquiry, removeInquiry,
  setTrips, addTrip, addAdminTrip, setTrip,
  setUser, setTrippian, setInquiry, removeTrip, updateToggleVote,
  addReview, updateVote, setFormSubmitted, setFormSubmitting, setDashboard
}
from '../actionCreators'

import {
  apologize, alertSuccess, alertInfo, attachInfoToData, resetState, getDataFromLocalStorage, setDataInLocalStorage, removeDataFromLocalStorage
}
from '../../utils/storeUtils'

import {
  admin as appConfig
}
from '../../config/appConfig'

import {
  fetchGetDestinationsByCategory, fetchGetTrippiansByCategory,
  fetchGetDestinations, fetchDeleteDestinationById, fetchGetDestinationById, fetchGetDestinationByName, fetchPostDestination, fetchPutDestination,
  fetchGetTrippians, fetchDeleteTrippianById, fetchGetTrippianById, fetchPostTrippian, fetchPutTrippian,
  fetchGetUsers, fetchDeleteUserById, fetchGetUserById, fetchPostUser,
  fetchGetInquiries, fetchDeleteInquiryById, fetchGetInquiryByReceiverId, fetchPostInquiry,
  fetchGetTrips, fetchDeleteTripById, fetchGetTripById, fetchPostTrip, fetchUpdateSave, fetchPutTrip,
  fetchPostReview, fetchUpdateVote, fetchLogin, fetchLogout, fetchGetDashboardById, fetchPostLogin, fetchPostSignup
}
from '../../utils/apiTrippian'
import store from '../store'

export function getPopularDestinations() {
  let cachedData = getDataFromLocalStorage('getPopularDestinations')
  if (cachedData) return setDestinations(cachedData)

  return (dispatch) => {
    return fetchGetDestinationsByCategory('popular')
      .then((destinations) => {
        // once get the data, set the store 
        dispatch(setDestinations(destinations))
        setDataInLocalStorage(destinations, 'getPopularDestinations')
      })
      // catch any error and set the store state 
      .catch(error => apologize(error))
  }
}
export function getPopularTrippians() {
  let cachedData = getDataFromLocalStorage('getPopularTrippians')
  if (cachedData) return setTrippians(cachedData)
  return (dispatch) => {
    return fetchGetTrippiansByCategory('popular')
      .then(trippians => {
        dispatch(setTrippians(trippians))
        setDataInLocalStorage(trippians, 'getPopularTrippians')
      })
      .catch(error => apologize(error))
  }
}

// get One 
export function getDashboardById(id1) {
  let id = id1 || store.getState().appState.get('user').id
  log.info('-- getting a dashboard now in reducer', id)
    //though unlikely, better add id as identifier in case there are multiple users using the same computer
  let localStoreKey = `getDashboardById${id}`
  let cachedData = getDataFromLocalStorage('getDashboardById', id)

  log.info('getDashboardById from local store', cachedData)
  if (cachedData) return setDashboard(cachedData)

  return (dispatch) => {
    return fetchGetDashboardById(id)
      .then((dashboard) => {
        log.info('--got it', dashboard)
        dispatch(setDashboard(dashboard))
        setDataInLocalStorage(dashboard, 'getDashboardById', id)
      })
      .catch(error => apologize(error))
  }
}

export function getDestinationById(id) {
  log.info('-- getting a destination now in reducer', id)
  let cachedData = getDataFromLocalStorage('getDestinationById', id)
  if (cachedData) return setDestination(cachedData)

  return (dispatch) => {
    return fetchGetDestinationById(id)
      .then((destination) => {
        log.info('--got it', destination)
        dispatch(setDestination(destination))
        setDataInLocalStorage(destination, 'getDestinationById', id)
      })
      .catch(error => apologize(error))
  }
}

export function getDestinationByName(name) {
  log.info('-- getting a destination now in reducer', name)
  let cachedData = getDataFromLocalStorage('getDestinationByName', name)
  if (cachedData) return setDestination(cachedData)

  return (dispatch) => {
    return fetchGetDestinationByName(name)
      .then((destination) => {
        log.info('--got it', destination)
        dispatch(setDestination(destination))
        setDataInLocalStorage(destination, 'getDestinationByName', name)

      })
      .catch(error => apologize(error))
  }
}

export function getTripById(id, includeUserInfo = false) {
  log.info('-- getting a Trip now in reducer', id)
  let cachedData = getDataFromLocalStorage('getTripById', id)
  if (cachedData) return setTrip(cachedData)
  return (dispatch) => {
    return fetchGetTripById(id, includeUserInfo)
      .then((trip) => {
        log.info('--got it', trip)
          // TODO: update once server is updated 
        dispatch(setTrip(trip))
        setDataInLocalStorage(trip, 'getTripById', id)
      })
      .catch(error => apologize(error))
  }
}

export function getUserById(id) {
  log.info('-- getting a User now in reducer', id)
  let cachedData = getDataFromLocalStorage('getUserById', id)
  if (cachedData) return setUser(cachedData)
  return (dispatch) => {
    return fetchGetUserById(id)
      .then((user) => {
        log.info('--got user', user)
        dispatch(setUser(user))
        setDataInLocalStorage(user, 'getUserById', id)
      })
      .catch(error => apologize(error))
  }
}
export function getTrippianById(id) {
  log.info('-- getting a Trippian now in reducer', id)
  let cachedData = getDataFromLocalStorage('getTrippianById', id)
  if (cachedData) return setTrippian(cachedData)
  return (dispatch) => {
    return fetchGetTrippianById(id)
      .then((trippian) => {
        log.info('--got trippian', trippian)
        dispatch(setTrippian(trippian))
        setDataInLocalStorage(trippian, 'getTrippianById', id)
      })
      .catch(error => apologize(error))
  }
}

export function getInquiryById(id) {
  log.info('-- getting a Inquiry now in reducer', id)
  let cachedData = getDataFromLocalStorage('getInquiryById', id)
  if (cachedData) return setInquiry(cachedData)

  return (dispatch) => {
    return fetchGetInquiryByReceiverId(id)
      .then((inquiry) => {
        log.info('--got inquiry', inquiry)
        dispatch(setInquiry(inquiry))
        setDataInLocalStorage(inquiry, 'getInquiryById', id)
      })
      .catch(error => apologize(error))
  }
}

// posting 
export function postDestination(data) {
  store.dispatch(setFormSubmitting(true))
  alertInfo('Submitting the destination information now...')
  attachInfoToData(data, {
    searchAsName: true,
    album: true,
    feature: true
  })
  log.info('-- posting a destination now in reducer', data)
    // after posting the destination, add the response data to the store on adminDestinations, aslo add to newDestinations on apiTrippians
  return (dispatch) => {
    return fetchPostDestination(data)
      .then(destination => {
        log.info('---posted', destination)
        dispatch(addDestination(destination))
        dispatch(addAdminDestination(destination))
        dispatch(setFormSubmitted(true))
        store.dispatch(setFormSubmitting(false))
        alertSuccess('Successfully added destination')
        setDataInLocalStorage(destination, 'getDesetinationById', destination.id)
      })
      .catch(error => apologize(error))
  }
}

export function putDestination(data) {
  store.dispatch(setFormSubmitting(true))
  alertInfo('Submitting the destination information now...')
  attachInfoToData(data, {
    // searchAsName: true,  
    album: true,
    // feature: true,
    isPutDestination: true // will delete a few fields and add UpdatedAt
  })
  console.info('-- putting a destination now in reducer', data)

  return (dispatch) => {
    return fetchPutDestination(data)
      .then(destination => {
        console.info('--- already put', destination)
          // dispatch(updateDestination(destination))  //TODO: update the front-end view
          // dispatch(addAdminDestination(destination))  // TODO: update the admin view
        dispatch(setFormSubmitted(true))
        store.dispatch(setFormSubmitting(false))
        alertSuccess('Successfully updated destination')
        setDataInLocalStorage(destination, 'getDesetinationById', destination.id)
      })
      .catch(error => apologize(error))
  }
}

export function postTrip(data) {
  store.dispatch(setFormSubmitting(true))
    //TODO, update userId to global 
  attachInfoToData(data, {
    searchAsDestination: true,
    album: true,
    feature: true,
    userId: true,
    displayName: true,
    username: true

  })
  log.info('-- posting a trip now in reducer', data)
  alertInfo('Submitting the trip information now...')
  return (dispatch) => {
    return fetchPostTrip(data)
      .then(trip => {
        log.info('---posted', trip)
        dispatch(setFormSubmitted(true))
        store.dispatch(setFormSubmitting(false))
        dispatch(addTrip(trip))
        dispatch(addAdminTrip(trip))
        alertSuccess('Succeed', `${trip.id}: ${trip.title}`)
        setDataInLocalStorage(trip, 'getTripById', trip.id)
      })
      //TODO: customize this to give friendly error message 
      .catch(error => apologize(error))
  }
}

export function putTrip(data) {
  store.dispatch(setFormSubmitting(true))
  alertInfo('Submitting the Trip information now...')
  attachInfoToData(data, {
    album: true,
    isPutTrip: true // will delete a few fields and add UpdatedAt
  })
  console.info('-- putting a Trip now in reducer', data)

  return (dispatch) => {
    return fetchPutTrip(data)
      .then(trip => {
        console.info('--- already put', trip)
          // dispatch(updateTrip(Trip))  //TODO: update the front-end view
          // dispatch(addAdminTrip(Trip))  // TODO: update the admin view
        dispatch(setFormSubmitted(true))
        store.dispatch(setFormSubmitting(false))
        alertSuccess('Successfully updated trip')
        setDataInLocalStorage(trip, 'getTripById', trip.id)
      })
      .catch(error => apologize(error))
  }
}

export function postUser(data) {
  store.dispatch(setFormSubmitting(true))
    //TODO, update userId to global 
  data.senderId = 32
  data.trippianId = 31
  log.info('-- posting a user now in reducer', data)
  return (dispatch) => {
    return fetchPostUser(data)
      .then(user => {
        log.info('---posted', user)
        dispatch(setFormSubmitted(true))
        store.dispatch(setFormSubmitting(false))
        dispatch(addAdminUser(user))
        setDataInLocalStorage(user, 'getUserById', user.id)
      })
      .catch(error => apologize(error))
  }
}

export function postTrippian(data) {
  store.dispatch(setFormSubmitting(true))
  alertInfo('Submitting now...')
  log.info('-- posting a trippian now in reducer', data)
  return (dispatch) => {
    return fetchPostTrippian(data)
      .then(trippian => {
        log.info('---posted', trippian)
        dispatch(addAdminTrippian(trippian))
        dispatch(setFormSubmitted(true))
        store.dispatch(setFormSubmitting(false))
        alertSuccess('Successfully added trippian')
        setDataInLocalStorage(trippian, 'getTrippianById', trippian.id)
      })
      .catch(error => apologize(error))
  }
}

export function postInquiry(data) {
  store.dispatch(setFormSubmitting(true))
  alertInfo('Submitting inquiry now...')
  data.senderId = store.getState().appState.get('user').id
  data.trippianId = store.getState().apiTrippian.get('trippian').id || appConfig.defaultTrippianIDForInquiry //Normally you'd read
    // attachInfoToData(data, {
    //   createdAt: true
    // })
  log.info('-- posting a inquiry now in reducer', data)
  return (dispatch) => {
    return fetchPostInquiry(data)
      .then(inquiry => {
        log.info('---posted', inquiry)
        dispatch(setInquiry(inquiry))
        dispatch(addAdminInquiry(inquiry))
        alertSuccess('Successfully submitted inquiry')
        store.dispatch(setFormSubmitting(false))
        store.dispatch(setFormSubmitted(true))
        setDataInLocalStorage(inquiry, 'getInquiryById', inquiry.id)
      })
      .catch(error => apologize(error))
  }
}

export function postReview(data) {
  store.dispatch(setFormSubmitting(true))
  alertInfo('Submitting review now...')
  attachInfoToData(data, {
    user: true,
    createdAt: true
  })
  log.info('-- posting a review now in reducer', data)
  return (dispatch) => {
    return fetchPostReview(data)
      .then(review => {
        log.info('---posted', review)
        dispatch(addReview(review)) // add review to current trippian on the front-end
        alertSuccess('Successfully added review')
        store.dispatch(setFormSubmitted(true))
        store.dispatch(setFormSubmitting(false))

      })
      .catch(error => apologize(error))
  }
}



// deleting
export function deleteInquiryById(id) {
  alertInfo('Deleting a Inquiry now..')
  log.info('-- deleting a Inquiry now', id)
  return (dispatch) => {
    return fetchDeleteInquiryById(id)
      .then(() => {
        log.info('--deleted Inquiry', id)
        dispatch(removeInquiry(id))
          // REMOVE_INQUIRY
        removeDataFromLocalStorage('getInquiryById', id)
      })
      .catch(error => dispatch(apologize(error)))
  }
}

export function deleteTripById(id) {
  log.info('-- deleting a trip now', id)
  return (dispatch) => {
    return fetchDeleteTripById(id)
      .then(() => {
        log.info('--deleted Trip', id)
          // dispatch(removeTrip(id))
        dispatch(removeTrip(id))
        removeDataFromLocalStorage('getTripById', id)
      })
      .catch(error => dispatch(apologize(error)))
  }
}

//Put requests 
// vote can be 1 or -1 
export function voteTrip(vote = 1, tripId) {
  alertInfo('Voting for trip now...')
  const userId = store.getState().appState.get('user').id
  log.info('-- voting a trip now in reducer', vote, tripId)
  return (dispatch) => {
    return fetchUpdateVote({
        userId, tripId, vote
      })
      .then(trip => {
        log.info('---voted', trip)
        dispatch(updateVote(vote, tripId))
        alertSuccess('Successfully voted for trip', tripId)
      })
      .catch(error => apologize(error))
  }
}

export function toggleSaveTrip(saveState, tripId) {
  const userId = store.getState().appState.get('user').id
  log.info('***inside toggleSaveTrip', saveState, tripId, userId)
  return (dispatch) => {
    return fetchUpdateSave({
        userId, tripId, saveState
      })
      .then(trip => {
        log.info('vote on this:', trip)
        dispatch(updateToggleVote(saveState, tripId))
      })
      .catch(error => apologize(error))
  }
}
//isNewTrippian will attach new trippian data, otherwise, it's just an update 
export function putTrippian(data, isNewTrippian = true) {
  store.dispatch(setFormSubmitting(true))
  alertInfo('Submitting now...')
  attachInfoToData(data, {
    isTripian: true,
    // isAdmin: true,  // only turn on for testing 
    userId: true
  })
  log.info('-- posting a trippian now in reducer', data)
  return (dispatch) => {
    return fetchPutTrippian(data)
      .then(trippian => {
        log.info('---finish putting', trippian)
          // dispatch(addAdminTrippian(trippian))
        dispatch(setFormSubmitted(true))
        dispatch(setUser(trippian))
        alertSuccess('Successfully added trippian')
        setDataInLocalStorage(trippian, 'getTrippianById', trippian.id)

      })
      .catch(error => apologize(error))
  }
}

// Login related 
export function login(type = 'facebook') {
  alertInfo('Login with facebook now...')
  log.info('-- login now in reducer', type)
  return (dispatch) => {
    return fetchLogin(type)
      .then(() => {
        log.info('---logged in')
          // dispatch(updateVote(vote, tripId))
          // TODO: update state 
        alertSuccess('Successfully logged in', window.document.cookie)
      })
      .catch(error => apologize(error))
  }
}

export function localLogin(data) {
  return (dispatch) => {
    return fetchPostLogin(data)
      .then(() => {
        alertSuccess('Successfully logged in', window.document.cookie)
      })
      .catch(error => apologize(error))
  }
}

export function localSignup(data) {
  return (dispatch) => {
    return fetchPostSignup(data)
      .then(() => {
        alertSuccess('Successfully signed up', window.document.cookie)
      })
  }
}

export function logout() {
  alertInfo('Logout now...')
  log.info('-- logout now in reducer')
  return (dispatch) => {
    return fetchLogout()
      .then(() => {
        log.info('---logged out')
          // dispatch(updateVote(vote, tripId))
          // TODO: update state 
        alertSuccess('Successfully logged out', window.document.cookie)
      })
      .catch(error => apologize(error))
  }
}
