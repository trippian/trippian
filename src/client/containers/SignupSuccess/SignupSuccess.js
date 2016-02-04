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

export default class SignupSuccess extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const user = getCookieByName('trippianPass')
    setAppStateUser()
  }

  render() {
    return (
      <div className="signup">
        <h3>Sign Up Successful!</h3>
        You can now connect with trippians all over the world!
      </div>
      )
  }
}

SignupSuccess.propTypes = {
  name: PropTypes.string
}