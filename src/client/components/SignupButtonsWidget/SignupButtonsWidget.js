import React from 'react'
import {
  Link
}
from 'react-router'
import {
  routeConfig as appConfig
}
from '../../config/appConfig'

const SignupButtonsWidget = ({
  isHorizontal = false, googleAuth = appConfig.googleAuth,
  facebookAuth = appConfig.facebookAuth
}) => {
  return (
    <div className="signup-button-widget">
        <a className="btn facebook"  href={facebookAuth}><i className="fa fa-facebook"></i> Sign Up with facebook</a>
        {!isHorizontal && <br/>}
        <a className="btn google" href={googleAuth}><i className="fa fa-google"></i> Sign Up with Google</a>
    </div>
      )
}
SignupButtonsWidget
  .displayName = 'SignupButtonsWidget'

export default SignupButtonsWidget