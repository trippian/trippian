import React from 'react'
import {
  Link
}
from 'react-router'
import {
  routeConfig as appRouteConfig
}
from '../../config/appConfig'
import {
  LoginButtonsWidget as appConfig
}
from '../../config/appConfig'

const LoginButtonsWidget = ({
  isHorizontal = false, googleAuth = appRouteConfig.googleAuth, facebookAuth = appRouteConfig.facebookAuth
}) => {
  return (
    <div className="login-button-widget">
        <a className="btn facebook"  href={facebookAuth}><i className="fa fa-facebook"></i>{appConfig.facebook}</a>
        {!isHorizontal && <br/>}
        <a className="btn google" href={googleAuth}><i className="fa fa-google"></i>{appConfig.google}</a>
    </div>
  )
}
LoginButtonsWidget
  .displayName = 'LoginButtonsWidget'

export default LoginButtonsWidget
