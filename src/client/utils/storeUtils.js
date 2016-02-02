import store from '../redux/store'
import {
  setAlert
}
from '../redux/actionCreators'

export function apologize(title = 'Operation failed', message = '') {
  store.dispatch(setAlert({
    type: 'danger',
    title,
    message
  }))
}
export function alertSuccess(title = 'Operation successful', message = '') {
  store.dispatch(setAlert({
    type: 'success',
    title,
    message
  }))
}

export function alertInfo(title = 'In progress...', message = '') {
  store.dispatch(setAlert({
    type: 'info',
    title,
    message
  }))
}

export function setAppStateUser(isLogin = true) {
  if (isLogin) {
    const cookieString = getCookieByName('trippianPass')
    const user = parseCookieStringToUser(cookieString)
    store.dispatch(setUser(user))
  } else {
    // handle log out, reset the state and clean the cookie for safety 
    const user = {
      isAuthed: false,
      username: '',
      isAdmin: false,
      displayName: '',
      email: '',
      id: 0,
      facebookId: 0,
      picture: 'http://lorempixel.com/200/200/people/',
      trippian: false
    }
    store.dispatch(setUser(user))
    clearTrippianCookieByName('trippianPass')
  }
}
