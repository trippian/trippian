import React, {
  Component, PropTypes
}
from 'react'

import {
  becomeATrippianPage as appConfig
}
from '../../config/appConfig'
import {
  JumbotronWidget, TrippianSignupFormWidget
}
from '../../components/index'

export default class TrippianSignup extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="trippian-edit-page">
        <JumbotronWidget title={appConfig.title} subTitle={appConfig.subTitle} isNoContact isTitled />
        <div className="container main-content-container">
            <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
                <div className="section">
                    <div className="section-header">
                        <h3>{appConfig.formTitle}</h3>
                    </div>
                    <div className="section-body">
                      <TrippianSignupFormWidget />
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
TrippianSignup.propTypes = {
  name: PropTypes.string
}

TrippianSignup.displayName = 'TrippianSignup Page'
