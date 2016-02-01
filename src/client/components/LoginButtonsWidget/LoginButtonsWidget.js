import React from 'react'
import {
  Link
}
from 'react-router'
import {
  routeConfig as appConfig
}
from '../../config/appConfig'

const LoginButtonsWidget = ({
  isHorizontal = false, googleAuth = appConfig.googleAuth, facebookAuth = appConfig.facebookAuth
}) => {
  return (
    <div className="login-button-widget">
        <a className="btn facebook"  href={facebookAuth}><i className="fa fa-facebook"></i>Login with facebook</a>
        {!isHorizontal && <br/>}
        <a className="btn google" href={ googleAuth}><i className="fa fa-google"></i>Login with Google</a>
    </div>
  )
}
LoginButtonsWidget
  .displayName = 'LoginButtonsWidget'

export default LoginButtonsWidget
