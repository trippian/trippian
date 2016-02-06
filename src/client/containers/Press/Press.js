import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}

from '../../components/index'

import {
  FormattedMessage, FormattedDate, FormattedNumber,
  FormattedTime, FormattedHTMLMessage, FormattedPlural
}
from 'react-intl'
import {
  pressPage as appConfig
}
from '../../config/appConfig'

export default class Press extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="join-us-page">
          <JumbotronWidget title={appConfig.title} subTitle={appConfig.subTitle} backgroundImage={appConfig.jumbotronBackground} />
          <div className="container main-content-container">
            <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
              <div className="section">
                  <div className="section-header text-center">
                      <h3>{appConfig.sectionOneTitle}</h3>
                  </div>
                  <div className="section-body">
                      <p>{appConfig.sectionOneContent}</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
Press.propTypes = {
  name: PropTypes.string
}
Press.displayName = 'Press Page'
