import React, {
  Component, PropTypes
}
from 'react'
import {
  JumbotronShortWidget
}
from '../../components/index'
import {
  SignupWrapper as appConfig
}
from '../../config/appConfig'

export default class SignupWrapper extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="destination-post-page">
        <JumbotronShortWidget title={appConfig.title} subTitle={appConfig.subTitle}/>
        <div className="container-main-content-container">
          <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
            {this.props.children}
          </div>
        </div>
        </div>
    )
  }
}

SignupWrapper.propTypes = {
  name: PropTypes.string
}
