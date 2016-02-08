import log from './log'
import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router'
import routes from './config/routes'
import store from './redux/store'
import {
  Provider
}
from 'react-redux'
import {
  IntlProvider
}
from 'react-intl'
import {
  getLocaleFromQueryString,
  getCookieByName
}
from '../shared/utils/clientUtils'

import {
  initializeAppStateWithLocale, initAppStateUserWithCookie
}
from '../shared/utils/clientAppSetup'

import {
  setAppStateUser
}
from './utils/storeUtils'

log.info('hello world')

// set the locale and intialize the store with the messages from that locale 
// ideally, we'll read from db (user setting) or user's browser / OS settings
let locale = store.getState().appState.get('locale') || getLocaleFromQueryString(window.location.search)

initializeAppStateWithLocale(locale)
let messages = store.getState().appState.get('messages')
initAppStateUserWithCookie()

// IntlProvider is not necessary since we are managing the locale and messages in App component 
// but keep it here just in case 
ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
        <Router>{routes}</Router> 
    </IntlProvider>,
  document.getElementById('app'))
