import store from '../redux/store'
import {
  setAlert, setLocale, setUser, setTrip, setDestination, setInquiry, setReview, setTrippian, setDashboard, setAvailabLeLocales, setIsFormSubmitted, setIsFormSubmitting, setFiles
}
from '../redux/actionCreators'
import {
  getCookieByName, parseCookieStringToUser, clearTrippianCookieByName
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
    const cookieString = getCookieByName('trippianPass')
    const user = parseCookieStringToUser(cookieString)
    user.isAuthed = true
    store.dispatch(setUser(user))
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


export function resetState({
  alert = false, user = false, trip = false, review = false, destination = false,
    trippian = false, inquiry = false, dashboard = false,
    isFormSubmitted = false, isFormSubmitting = false, files = false,
    locale = false, availableLocales = false
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

}
export function setFetchingState({}) {

}
export function setPostFetchingState({}) {

}
