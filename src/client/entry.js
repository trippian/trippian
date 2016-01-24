import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router'
import routes from './config/routes'
import store from './redux/store'

import {
  IntlProvider
}
from 'react-intl'
import {
  getLocaleFromQueryString
}
from '../shared/utils/clientUtils'

import {
  initializeAppStateWithLocale
}
from '../shared/utils/clientAppSetup'

// set the locale and intialize the store with the messages from that locale 
// ideally, we'll read from db (user setting) or user's browser / OS settings
let locale = store.getState().appState.get('locale') || getLocaleFromQueryString(window.location.search)

initializeAppStateWithLocale(locale)
let messages = store.getState().appState.get('messages')

// IntlProvider is not necessary since we are managing the locale and messages in App component 
// but keep it here just in case 
ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
        <Router>{routes}</Router>
    </IntlProvider>,
  document.getElementById('app'))
