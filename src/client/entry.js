import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router'
import routes from './config/routes'
import store from './redux/store'

import {
  IntlProvider, addLocaleData
}
from 'react-intl'
import {
  getMessagesByLocale
}
from '../shared/utils/clientUtils'

import {
  initializeAppStateWithLocale
}
from '../shared/utils/clientAppSetup'

// set the locale and intialize the store with the messages from that locale 
// ideally, we'll read from db or user;s ysstem 
let locale = 'en-US'
initializeAppStateWithLocale(locale)
let messages = store.getState().appState.get('messages')


// store.subscribe(() => {
//   const newLocale = store.getState().appState.get('locale')
//   console.log(store.getState())
//   if (newLocale !== locale) {
//     locale = newLocale
//     messages = store.getState().appState.get('messages')
//     console.log('locale changed', locale, messages)
//   }
// })


ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
        <Router>{routes}</Router>
    </IntlProvider>,
  document.getElementById('app'))
