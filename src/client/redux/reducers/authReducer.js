// this file stores the app's global state
// things like username and isUserAdmin is bit ambiguous whether it should exist here as we can only get it from network call
// later， we'll have to refactor it and make it clear and clean
// but for now, we'll store some commonly used app state variables here 
import log from '../../log'
import {
  SET_LOCALE, SET_LOCALE_MESSAGES, SET_USERNAME, SET_DISPLAYNAME, SET_ALERT, SET_FILES
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
  isUserAdmin: true,
  locale: 'en-US',
  availableLocales: ['en-US', 'zh', 'es'],
  messages: defaultMessages,
  files: [],
  alert: {
    type: 'success',
    title: '',
    message: ''
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
    default:
      return state
  }
}

const LOAD = 'redux-example/auth/LOAD';
const LOAD_SUCCESS = 'redux-example/auth/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/auth/LOAD_FAIL';
const LOGIN = 'redux-example/auth/LOGIN';
const LOGIN_SUCCESS = 'redux-example/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'redux-example/auth/LOGIN_FAIL';
const LOGOUT = 'redux-example/auth/LOGOUT';
const LOGOUT_SUCCESS = 'redux-example/auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'redux-example/auth/LOGOUT_FAIL';

const initialState = {
  loaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
          loaded: true,
          user: action.result
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
          loaded: false,
          error: action.error
      };
    case LOGIN:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
          user: action.result
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
          user: null,
          loginError: action.error
      };
    case LOGOUT:
      return {
        ...state,
        loggingOut: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
          user: null
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        loggingOut: false,
          logoutError: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/loadAuth')
  };
}

export function login(name) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: (client) => client.post('/login', {
      data: {
        name: name
      }
    })
  };
}
