import React, {
  Component, PropTypes
} 
from 'react'
import {
  SignupButtonsWidget, SignupFormWidget
}
from '../../components/index'

export default class Signup extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="signup">
        <h3>Signup</h3>
        <a href="#/login/success">Login Success Page</a>
        <SignupButtonsWidget />
        <SignupFormWidget />
      </div>
      )
  }
}

Signup.propTypes = {
  name: PropTypes.string
}