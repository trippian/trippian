import {
  SET_LOCALE, SET_LOCALE_MESSAGES, SET_USERNAME, SET_DISPLAYNAME
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
  messages: defaultMessages
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
    default:
      return state
  }
}
