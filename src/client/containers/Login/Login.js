import React, {
  Component, PropTypes
}
from 'react'
import {
  LoginFormWidget, JumbotronWidget, LoginButtonsWidget
}
from '../../components/index'
import store from '../../redux/store'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
      submitting: false,
      fields: ['username', 'password']
        // fields: {
        //   username: '',
        //   password: ''
        // }
    }
  }
  handleSumbit() {
    const formData = store.getState().form.loginForm

    console.log('submitting form', formData)
  }

  handleReset() {
    console.log('resetting form')
  }
  render() {
    return (
      <div id="destination-post-page">
        <JumbotronWidget title="Login" subTitle="Lorem ipsum dolor sit."/>
        <div className="container main-content-container">
          <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
            <h3>Login</h3>
            <LoginButtonsWidget />
            <LoginFormWidget error={this.state.error} fields={this.state.fields} onSubmit={this.handleSumbit} resetForm={this.handleReset} submitting={this.state.submitting} />


          </div>
        </div>
      </div>
    )
  }
}
Login.propTypes = {
  name: PropTypes.string
}
