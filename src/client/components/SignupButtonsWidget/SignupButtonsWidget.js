import log from '../../log'
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
  SignupButtonsWidget as appConfig
}
from '../../config/appConfig'

const SignupButtonsWidget = ({
  isHorizontal = false, googleAuth = appRouteConfig.googleAuth,
    facebookAuth = appRouteConfig.facebookAuth
}) => {
  return (
    <div className="signup-button-widget">
        <a className="btn facebook"  href={facebookAuth}><i className="fa fa-facebook"></i> {appConfig.facebook}</a>
        {!isHorizontal && <br/>}
        <a className="btn google" href={googleAuth}><i className="fa fa-google"></i> {appConfig.google}</a>
    </div>
  )
}
SignupButtonsWidget.displayName = 'SignupButtonsWidget'

export default SignupButtonsWidget
