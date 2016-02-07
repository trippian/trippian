import React, {
  Component, PropTypes
}
from 'react'
import {
  getCookieByName
}
from '../../../shared/utils/clientUtils'
import {
  setAppStateUser
}
from '../../utils/storeUtils'
import store from '../../redux/store'
import {
  LoginSuccess as appConfig
}
from '../../config/appConfig'

export default class LoginSuccess extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const user = getCookieByName('trippianPass')
      // dipatch set user at appState 
    console.log('got user from coookie', user)
    setAppStateUser()

    window.location.href = `${window.location.origin}/#/dashboard`
      //TODO: read history data and redirect user to previous page 
      // const history = store.getState().appState.get('history')
      // console.log('----history', history)
      // history.goBack()

  }

  render() {
    return (
      <div className="login">
          <h3>{appConfig.title}</h3>
          {appConfig.content}
      </div>
    )
  }
}
LoginSuccess.propTypes = {
  name: PropTypes.string
}
