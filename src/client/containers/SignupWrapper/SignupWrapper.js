import React, {
  Component, PropTypes
}
from 'react'
import {
  JumbotronWidget
}
from '../../components/index'

export default class SignupWrapper extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div id="destination-post-page">
        <JumbotronWidget title="Sign Up"/>
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