// this file stores the app's global state
// things like username and isUserAdmin is bit ambiguous whether it should exist here as we can only get it from network call
// later， we'll have to refactor it and make it clear and clean
// but for now, we'll store some commonly used app state variables here 

import {
  SET_LOCALE, SET_LOCALE_MESSAGES, SET_USERNAME, SET_DISPLAYNAME, SET_ALERT, SET_FILES, SET_USER
}
from '../actionTypes'

const defaultMessages = require('../../../../translate/lang/en-US.json')
import {
  Map
}
from 'immutable'
const initialState = new Map({
  username: 'vidaaudrey', // update later 
  displayName: 'Audrey Li', // update later 
  locale: 'en-US',
  availableLocales: ['en-US', 'zh', 'es'],
  messages: defaultMessages,
  files: [],
  alert: {
    type: 'success',
    title: '',
    message: ''
  },
  user: {
    isAuthed: false,
    isAdmin: false,
    isTrippian: false,
    username: '',
    displayName: '',
    email: '',
    id: 32, //TODO
    facebookId: 0,
    googleId: 0,
    picture: 'http://lorempixel.com/200/200/people/'
  }
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
    default:
      return state
  }
}
