import log from '../log'
import store from '../redux/store'
import {
  setAlert, setLocale, setUser, setTrip, setDestination, setInquiry, setReview, setTrippian, setDashboard, setAvailabLeLocales, setIsFormSubmitted, setIsFormSubmitting, setFiles, setSearchText
}
from '../redux/actionCreators'
import {
  getCookieByName, parseCookieStringToUser, clearTrippianCookieByName, readerUserFromCookie
}
from '../../shared/utils/clientUtils'

import * as initialStateData from '../redux/initalState'

export function apologize(title = 'Operation failed', message = '') {
  store.dispatch(setAlert({
    type: 'danger',
    title,
    message
  }))
}
export function alertSuccess(title = 'Operation successful', message = '') {
  store.dispatch(setAlert({
    type: 'success',
    title,
    message
  }))
}

export function alertInfo(title = 'In progress...', message = '') {
  store.dispatch(setAlert({
    type: 'info',
    title,
    message
  }))
}

export function setAppStateUser(isLogin = true) {
  if (isLogin) {
    const user = readerUserFromCookie()
    if (user) {
      user.isAuthed = true
      store.dispatch(setUser(user))
    }
  } else {
    // handle log out, reset the state and clean the cookie for safety 
    const user = {
      isAuthed: false,
      username: '',
      isAdmin: false,
      displayName: '',
      email: '',
      id: 0,
      facebookId: 0,
      picture: 'http://lorempixel.com/200/200/people/',
      trippian: false
    }
    store.dispatch(setUser(user))
    clearTrippianCookieByName('trippianPass')
  }
}

// searchAsDestination => postTrip
// searchAsName => postDestination
export function attachInfoToData(data, {
  user = false, userId = false, isAdmin = false, isTripian = false, isNoUserId = false,
    userIdAsSenderId = false, userIdAsTrippianId = false, album = false, feature = false, searchAsDestination = false, searchAsName = false,
    displayName = false, username = false, createdAt = true,
    isPutDestination = false, isPutTrip = false
}) {
  // neo4j can't store object, have to add all fields as properties
  if (user) {
    const user = store.getState().appState.get('user')

    // isAdmin is handled by server side and is top secret, we have to persist the state just in case the user data got overwritten 
    data = Object.assign(data, user)
    log.info('in store util', data)
  }
  if (isNoUserId) {
    // 
    data.tempId = data.id
    delete data.id
  }

  if (userId) data.userId = store.getState().appState.get('user').id
  if (isAdmin) data.isAdmin = true //TODO: will need to coordinate with the form
  if (isTripian) data.isTrippian = true
  if (userIdAsSenderId) data.senderId = store.getState().appState.get('user').id
  if (userId) data.userId = store.getState().appState.get('user').id
  if (displayName) data.displayName = store.getState().appState.get('user').displayName
  if (username) data.username = store.getState().appState.get('user').username
  if (album) {
    data.album = store.getState().appState.get('files')
    if (data.album.length === 0) {
      delete data.album
    }
  }
  // process feature image. TODO: add more logic control 
  if (feature && !data.feature) {
    if (data.album && data.album.length > 0) {
      data.feature = data.album[0]
    } else {
      //TODO: replace with placeholder image 
      data.feature = 'http://lorempixel.com/800/600/city/'
    }
  }

  if (searchAsDestination) data.destination = store.getState().appState.get('searchText').label
  if (searchAsName) {
    const search = store.getState().appState.get('searchText')
    data.name = search.label
    data.lat = search.location.lat
    data.lng = search.location.lng
  }

  if (isPutDestination) {
    delete data.createdAt
    delete data.lng
    delete data.lat
    delete data.name
    const destination = store.getState().apiTrippian.get('destination')
    data.id = destination.id
      // data.name = destination.name
      // data.updatedAt = new Date()  // will do this at server side 
      // delete data.album  // is this causing trouble?
  }
  if (isPutTrip) {
    delete data.createdAt
    delete data.lng
    delete data.lat
    const trip = store.getState().apiTrippian.get('trip')
    data.id = trip.id
    delete data.album
  }

  return data
}

export function resetState({
  alert = false, user = false, trip = false, review = false, destination = false,
    trippian = false, inquiry = false, dashboard = false,
    isFormSubmitted = false, isFormSubmitting = false, files = false,
    locale = false, availableLocales = false, searchText = false
}) {
  if (alert) store.dispatch(setAlert(initialStateData.alert))
  if (user) store.dispatch(setUser(initialStateData.user))
  if (trip) store.dispatch(setTrip(initialStateData.trip))
  if (review) store.dispatch(setReview(initialStateData.review))
  if (destination) store.dispatch(setDestination(initialStateData.destination))
  if (trippian) store.dispatch(setTrippian(initialStateData.trippian))
  if (inquiry) store.dispatch(setInquiry(initialStateData.inquiry))
  if (dashboard) store.dispatch(setDashboard(initialStateData.dashboard))

  if (locale) store.dispatch(setLocale(initialStateData.locale))
  if (availableLocales) store.dispatch(setAvailabLeLocales(initialStateData.availableLocales))

  if (isFormSubmitted) store.dispatch(setIsFormSubmitted(initialStateData.appState.isFormSubmitted))
  if (isFormSubmitting) store.dispatch(setIsFormSubmitting(initialStateData.appState.isFormSubmitting))
  if (files) store.dispatch(setFiles(initialStateData.appState.files))
  if (searchText) store.dispatch(setSearchText(initialStateData.appState.searchText))

}
export function setFetchingState({}) {

}
export function setPostFetchingState({}) {

}
