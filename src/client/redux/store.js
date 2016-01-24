import {
  createStore, combineReducers
}
from 'redux'
import {
  reducer as formReducer
}
from 'redux-form'
import {
  Map
}
from 'immutable'

const defaultMessages = require('../../../translate/lang/en-US.json')
  //will move the reducer out of the file later 
  // import apiTrippianReducer from './reducers'

//action names
const SET_DESTINATIONS = 'apiTrippian.SET_DESTINATIONS'
const SET_TRIPPIANS = 'apiTrippian.SET_TRIPPIANS'
const GET_DESTINATION_BY_ID = 'apiTrippian.GET_DESTINATION_BY_ID'
const GET_TRIPPIAN_BY_ID = 'apiTrippian.GET_TRIPPIAN_BY_ID'
const GET_DESTINATIONS = 'apiTrippian.GET_DESTINATIONS'
const GET_TRIPPIANS = 'apiTrippian.GET_TRIPPIANS'
const SET_LOCALE = 'appState.SET_LOCALE'
const SET_LOCALE_MESSAGES = 'appState.SET_LOCALE_MESSAGES'
const SET_USERNAME = 'appState.SET_USERNAME'
const SET_DISPLAYNAME = 'appState.SET_DISPLAYNAME'

// initialize the app state 
const getInitialState = () => {
  return new Map({
    username: 'vidaaudrey', // update later 
    displayName: 'Audrey Li', // update later 
    locale: 'en-US',
    availableLocales: ['en-US', 'zh', 'es'],
    messages: defaultMessages,
    trippians: [],
    destinations: []
  })
}


// reducer for the general trippian api 
function apiTrippianReducer(state = getInitialState(), action) {
  switch (action.type) {
    case SET_DESTINATIONS:
      return state.merge(new Map({
        destinations: action.payload.destinations
      }))
    default:
      return state
  }
}

function appStateReducer(state = getInitialState(), action) {
  switch (action.type) {
    case SET_LOCALE:
      return state.set('locale', action.payload.locale)

    case SET_LOCALE_MESSAGES:
      return state.set('messages', action.payload.messages)
    case SET_USERNAME:
      return state.set('username', action.payload.username)
    case SET_DISPLAYNAME:
      return state.set('displayName', action.payload.displayName)
    default:
      return state
  }
}
// combine all reducers 
const reducer = combineReducers({
  apiTrippian: apiTrippianReducer,
  appState: appStateReducer,
  form: formReducer
})

export default createStore(reducer)
