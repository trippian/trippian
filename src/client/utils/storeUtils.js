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
