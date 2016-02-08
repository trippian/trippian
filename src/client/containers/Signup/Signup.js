import React, {
  Component, PropTypes
}
from 'react'
import {
  SignupButtonsWidget, SignupFormWidget
}
from '../../components/index'
import {
  Signup as appConfig
}
from '../../config/appConfig'

export default class Signup extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="signup">
        <h3>{appConfig.title}</h3>
        <SignupButtonsWidget />
        <SignupFormWidget />
      </div>
    )
  }
}

Signup.propTypes = {
  name: PropTypes.string
}
