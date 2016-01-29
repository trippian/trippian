import React from 'react'
import {
  Link
}
from 'react-router'

const LoginButtonsWidget = ({
  isHorizontal = false, googleAuth = 'http://localhost:4000/auth/google', facebookAuth = 'http://localhost:4000/auth/facebook'
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
