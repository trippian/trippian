import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget, CircleImageWidget, TeamCardsWidget, JumbotronVideoWidget
}
from '../../components/index'
import {
  FormattedMessage, FormattedDate, FormattedNumber, FormattedTime, FormattedHTMLMessage, FormattedPlural
}
from 'react-intl'
import {
  About as appConfig
}
from '../../config/appConfig'
export default class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div id="about-page">
        <JumbotronWidget title={appConfig.title} subTitle={appConfig.subTitle} backgroundImage={appConfig.jumbotronBackground} />
          <div className="container main-content-container">
            <div className="col-sm-12 col-md-10 col-md-offset-1 content-container">
              <div className="section">
                  <div className="section-header text-center">
                      <h3>{appConfig.sectionOneTitle}</h3>
                  </div>
                  <div className="section-body">
                      <p>{appConfig.sectionOneContent}</p>
                  </div>
              </div>

              <div className="section row">
                  <div className="section-header text-center">
                      <h3>{appConfig.teamSectionTitle}</h3>
                  </div>
                  <div className="section-body">
                    <TeamCardsWidget dataList={appConfig.team}/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
About.propTypes = {
  name: PropTypes.string
}

About.displayName = 'About Page'
