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

export default class LoginSuccess extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const user = getCookieByName('trippianPass')
      // dipatch set user at appState 
    console.log('got user from coookie', user)
    setAppStateUser()
  }

  render() {
    return (
      <div className="login">
          <h3>LoginSuccess</h3>
          you logged in 
      </div>
    )
  }
}
LoginSuccess.propTypes = {
  name: PropTypes.string
}
