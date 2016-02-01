import React, {
  Component, PropTypes
}
from 'react'
import {
  Link
}
from 'react-router'
import {
  routeConfig as appConfig
}
from '../../config/appConfig'
import store from '../../redux/store'
import {
  login
}
from '../../redux/apiIndex'

export default class LoginButtonsWidget extends Component {

  handleClick(type = 'facebook') {
    console.log('--loginbuttonwidget', type)
    store.dispatch(login(type))
  }
  render() {
    return (
      <div className="login-button-widget">
        <button type='button' className="btn facebook" onClick={this.handleClick.bind(this, 'facebook')}><i className="fa fa-facebook"></i>Login with facebook</button>
        {!this.props.isHorizontal && <br/>}
        <button type='button'  className="btn google" onClick={this.handleClick.bind(this, 'google')}><i className="fa fa-google"></i>Login with Google</button>
    </div>
    )
  }
}

LoginButtonsWidget.propTypes = {
  isHorizontal: PropTypes.bool
}
LoginButtonsWidget.displayName = 'LoginButtonsWidget'

export default LoginButtonsWidget
