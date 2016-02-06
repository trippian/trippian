// this will help initialize the app state with the locale and messages

rredrredd
import store from '../../client/redux/store'
import {
  addLocaleData
}
from 'react-intl'
import en from '../../client/locale-data/en'
import zh from '../../client/locale-data/zh'
import es from '../../client/locale-data/es'
import de from '../../client/locale-data/de'
import fr from '../../client/locale-data/fr'

import {
  getMessagesByLocale, readerUserFromCookie
}
from './clientUtils'

import {
  setLocale, setLocaleMessages, setUser
}
from '../../client/redux/actionCreators'


export function initializeAppStateWithLocale(locale = 'en-US') {
  //set the local 
  store.dispatch(setLocale('en-US'))
  addLocaleData(en)
  addLocaleData(zh)
  addLocaleData(es)
  addLocaleData(de)
  addLocaleData(fr)

  const messages = getMessagesByLocale(locale)
    // refactor the dispatch to use actionCreator instead 
  store.dispatch(setLocaleMessages(messages))
    // store.dispatch({
    //   type: 'appState.SET_LOCALE_MESSAGES',
    //   payload: {
    //     messages: messages
    //   }
    // })

}

export function initAppStateUserWithCookie() {
  const user = readerUserFromCookie()
  if (user) {
    user.isAuthed = true
    console.log('----got user from cookie', user)
    store.dispatch(setUser(user))
  }
}
