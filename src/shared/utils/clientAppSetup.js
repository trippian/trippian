// this will help initialize the app state with the locale and messages

import store from '../../client/redux/store'
import {
  addLocaleData
}
from 'react-intl'
import en from '../../client/locale-data/en'
import zh from '../../client/locale-data/zh'
import {
  getMessagesByLocale
}
from './clientUtils.js'


export function initializeAppStateWithLocale(locale = 'en-US') {
  //set the local 
  store.dispatch({
    type: 'appState.SET_LOCALE',
    payload: {
      locale: 'en-US'
    }
  })
  addLocaleData(en)
  addLocaleData(zh)

  const messages = getMessagesByLocale(locale)

  store.dispatch({
    type: 'appState.SET_LOCALE_MESSAGES',
    payload: {
      messages: messages
    }
  })
}
