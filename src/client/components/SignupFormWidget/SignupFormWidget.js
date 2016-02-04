import React, {
  Component, PropTypes
}
from 'react'

import {
  reduxForm 
}
from 'redux-form'

// const submit = (values, dispatch) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {

//     })
//   })
// }
export default class SignupFormWidget extends Component {
  // static PropTypes = {
  //   error: PropTypes.string,
  //   fields: PropTypes.object.isRequired,
  //   handleSubmit: PropTypes.func.isRequired,
  //   resetForm: PropTypes.func.isRequired,
  //   submitting: PropTypes.bool.isRequired
  // }
  constructor(props) {
    super(props)
  }

  render() {
    // const {
    //   fields: {
    //     name, email, password
    //   },
    //   error,
    //   resetForm,
    //   handleSubmit,
    //   submitting
    // } = this.props

    return (
      <div>
        <h2>Sign Up</h2>
      </div>
    )
  }
}

SignupFormWidget = reduxForm({
  form: 'signupForm',
  fields: ['username', 'password']
})(SignupFormWidget)

SignupFormWidget.displayName = 'SignupFormWidget'

export default SignupFormWidget
