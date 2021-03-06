// this file stores the app's global state
// things like username and isUserAdmin is bit ambiguous whether it should exist here as we can only get it from network call
// later， we'll have to refactor it and make it clear and clean
// but for now, we'll store some commonly used app state variables here 

import log from '../../log'
import {
  SET_APP_STATE, SET_LOCALE, SET_LOCALE_MESSAGES, SET_USERNAME, SET_DISPLAYNAME, SET_ALERT, SET_FILES, SET_USER, SET_FORM_SUBMITTED, SET_FORM_SUBMITTING, SET_SEARCH_TEXT, SET_HISTORY, SET_FORM_EDITING_MODE, SET_SHOW_ADMIN_BUTTONS
}
from '../actionTypes'
import * as initialStateData from '../initalState'
export function setFormEditingMode(isFormEditingMode) {
  return {
    type: SET_FORM_EDITING_MODE,
    payload: {
      isFormEditingMode
    }
  }
}

const defaultMessages = require('../../../../translate/lang/en-US.json')
import Immutable, {
  Map
}
from 'immutable'
const initialState = new Map({
  // keep track of all form submitting state so we can give meaningful feedback to user and clean up data 
  // once the remote call suceed, set isFormSubmitted to be true
  // once finishing cleaning up the data, set isFormSubmitted to false again 
  isFormSubmitted: false,
  isFormSubmitting: false,
  isFormEditingMode: true,
  showAdminButtons: true,
  files: [],
  alert: initialStateData.alert,
  user: initialStateData.user,
  searchText: initialStateData.searchText,
  locale: initialStateData.locale,
  availableLocales: initialStateData.availableLocales,
  messages: defaultMessages,
  history: {}
})



export default function appStateReducer(state = initialState, action) {
  switch (action.type) {
    case SET_APP_STATE:
      return Immutable.fromJS(action.payload.appState)

    case SET_LOCALE:
      return state.set('locale', action.payload.locale)
    case SET_LOCALE_MESSAGES:
      return state.set('messages', action.payload.messages)
    case SET_ALERT:
      if (action.payload.alert && typeof (action.payload.alert.title) === 'string') {
        return state.set('alert', action.payload.alert)
      }
    case SET_FILES:
      return state.set('files', action.payload.files)
    case SET_USER:
      return state.set('user', action.payload.user)

    case SET_FORM_SUBMITTED:
      return state.set('isFormSubmitted', action.payload.isFormSubmitted)
    case SET_FORM_SUBMITTING:
      return state.set('isFormSubmitting', action.payload.isFormSubmitting)

    case SET_SEARCH_TEXT:
      return state.set('searchText', action.payload.searchText)

    case SET_HISTORY:
      return state.set('history', action.payload.history)

    case SET_FORM_EDITING_MODE:
      return state.set('isFormEditingMode', action.payload.isFormEditingMode)

    case SET_SHOW_ADMIN_BUTTONS:
      return state.set('showAdminButtons', action.payload.showAdminButtons)

    default:
      return state
  }
}

// ref: all history related operations
// createHref: createHref(location, query)
// createKey: createKey()
// createLocation: createLocation()
// createPath: createPath(location, query)
// go: go(n)
// goBack: goBack()
// goForward: goForward()
// isActive: isActive(pathname, query)
// listen: listen(listener)
// listenBefore: listenBefore(hook)
// listenBeforeLeavingRoute: listenBeforeLeavingRoute(route, hook)
// match: match(location, callback)
// push: push(location)
// pushState: pushState(state, path, query)
// registerTransitionHook: registerTransitionHook(hook)
// replace: replace(location)
// replaceState: replaceState(state, path, query)
// setState: setState(state)
// transitionTo: transitionTo(nextLocation)
// unregisterTransitionHook: unregisterTransitionHook(hook)
