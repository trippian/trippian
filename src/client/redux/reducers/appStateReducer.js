// this file stores the app's global state
// things like username and isUserAdmin is bit ambiguous whether it should exist here as we can only get it from network call
// later， we'll have to refactor it and make it clear and clean
// but for now, we'll store some commonly used app state variables here 

import {
  SET_LOCALE, SET_LOCALE_MESSAGES, SET_USERNAME, SET_DISPLAYNAME, SET_ALERT, SET_FILES, SET_USER, SET_FORM_SUBMITTED, SET_FORM_SUBMITTING, SET_SEARCH_TEXT
}
from '../actionTypes'
import * as initialStateData from '../initalState'

const defaultMessages = require('../../../../translate/lang/en-US.json')
import {
  Map
}
from 'immutable'
const initialState = new Map({
  // keep track of all form submitting state so we can give meaningful feedback to user and clean up data 
  // once the remote call suceed, set isFormSubmitted to be true
  // once finishing cleaning up the data, set isFormSubmitted to false again 
  isFormSubmitted: false,
  isFormSubmitting: false,
  files: [],
  searchText: 'San Francisco, CA, United States',
  locale: initialStateData.locale,
  availableLocales: initialStateData.availableLocales,
  messages: defaultMessages,
  alert: initialStateData.alert,
  user: initialStateData.user
})


export default function appStateReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCALE:
      return state.set('locale', action.payload.locale)
    case SET_LOCALE_MESSAGES:
      return state.set('messages', action.payload.messages)
    case SET_USERNAME:
      return state.set('username', action.payload.username)
    case SET_DISPLAYNAME:
      return state.set('displayName', action.payload.displayName)
    case SET_ALERT:
      return state.set('alert', action.payload.alert)
    case SET_FILES:
      return state.set('files', action.payload.files)
    case SET_USER:
      return state.merge(new Map({
        user: action.payload.user,
        isAuthed: true
      }))
    case SET_FORM_SUBMITTED:
      return state.set('isFormSubmitted', action.payload.isFormSubmitted)

    case SET_FORM_SUBMITTING:
      return state.set('isFormSubmitting', action.payload.isFormSubmitting)

    case SET_SEARCH_TEXT:
      return state.set('searchText', action.payload.searchText)

      // case LOAD_DESTINATION:
      //   return state.set('destination', action.payload.destination)

    default:
      return state
  }
}
