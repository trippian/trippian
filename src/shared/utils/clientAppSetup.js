// this will help initialize the app state with the locale and messages
import log from '../../client/log'
import store from '../../client/redux/store'
import {
  addLocaleData
}
from 'react-intl'
import en from '../../client/locale-data/en'
import zh from '../../client/locale-data/zh'
  // import es from '../../client/locale-data/es'
  // import de from '../../client/locale-data/de'
  // import fr from '../../client/locale-data/fr'

import {
  getMessagesByLocale, readerUserFromCookie
}
from './clientUtils'

import {
  setLocale, setLocaleMessages, setUser, setShowAdminButtons, setAppState
}
from '../../client/redux/actionCreators'
import {
  getLocaleFromQueryString,
  getCookieByName
}
from '../../shared/utils/clientUtils'
import {
  getDataFromLocalStorage, setDataInLocalStorage
}
from '../../client/utils/storeUtils'

import {
  adminOnly as appConfig
}
from '../../client/config/appConfig'


export function initializeAppStateWithLocale(locale = 'en-US') {
  //set the local 
  store.dispatch(setLocale('en-US'))
  addLocaleData(en)
  addLocaleData(zh)
    // addLocaleData(es)
    // addLocaleData(de)
    // addLocaleData(fr)

  const messages = getMessagesByLocale(locale)
  store.dispatch(setLocaleMessages(messages))

}

export function initAppStateUserWithCookie() {
  const user = readerUserFromCookie()
  if (user) {
    user.isAuthed = true
    log.info('----got user from cookie', user)
    store.dispatch(setUser(user))
  }
}

// we'll read user's cookie and set the user 
export function initApp() {
  let locale = store.getState().appState.get('locale') || getLocaleFromQueryString(window.location.search)
  initializeAppStateWithLocale(locale)

  // hide/hide admin buttons based on config 
  // show / hide certain buttons based on if the user is admin or the appConfig 
  store.dispatch(setShowAdminButtons(appConfig.showAdminButtons))

  // if appState exisit in localStorage, read it and use it to set appState
  let cachedAppState = getDataFromLocalStorage('trippian.appState')
  log.info('---- ********* got app state from local storage', cachedAppState)
  if (cachedAppState) {
    // to prevent overwrite, we'll keep local
    let cachedMessages = cachedAppState.messages
    store.dispatch(setAppState(cachedAppState))
    store.dispatch(setLocaleMessages(cachedMessages))
  }
  initAppStateUserWithCookie()
  store.subscribe(() => {
    log.info('--- store updates', store.getState().appState)
    setDataInLocalStorage(store.getState().appState, 'trippian.appState')
  })
}
