import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'
import {
  Link
}
from 'react-router'
import {
  CircleImageWidget
}
from '../index'
import {
  connect
}
from 'react-redux'
import {
  TrippianProfileWidget as appConfig
}
from '../../config/appConfig'

function mapStateToProps(state) {
  return {
    dashboard: state.apiTrippian.get('dashboard')
  }
}

@
connect(mapStateToProps)
export default class TrippianProfileWidget extends Component {
  render() {
    const {
      username, displayName, email, facebookId = 0, googleId = 0, picture, totalRating, bio, slogan, website, introduction
    } = this.props.dashboard
    return (
      <div className="user-profile-widget">
      <div className="row">
        <div className="col-sm-3 col-md-4 col-lg-4 col-sm-offset-4 col-md-offset-3 col-lg-offset-1">
          <CircleImageWidget imageSrc={picture} title={displayName}/>
        </div>
        <div className="col-sm-3 col-md-3 col-lg-4 col-sm-offset-5 col-md-offset-3 col-lg-offset-2">
          <h1>{displayName}</h1>
          <p>{slogan}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3 col-md-4 col-lg-6">
          <h1>Bio</h1>
          <p>{bio}</p>
          <p>{introduction}</p>
        </div>
        <div className="col-sm-3 col-md-4 col-lg-4 col-sm-offset-4 col-md-offset-3 col-lg-offset-1">
          <h1>Personal</h1>
          <p><i className="fa fa-envelope-o"></i> {email}</p>
          <p><i className="fa fa-facebook"></i> {facebookId}</p>
          <p><i className="fa fa-google-plus"></i> {googleId}</p>
        </div>
      </div>
    </div>
    )
  }
}
TrippianProfileWidget.displayName = 'TrippianProfileWidget'

export default TrippianProfileWidget
