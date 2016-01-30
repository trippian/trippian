import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget, CircleImageWidget, TeamCardsWidget
}
from '../../components/index'
import {
  FormattedMessage, FormattedDate, FormattedNumber, FormattedTime, FormattedHTMLMessage, FormattedPlural
}
from 'react-intl'

export default class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div id="about-page">
        <JumbotronWidget title="About" subTitle="Lorem ipsum dolor sit."/>
          <div className="container main-content-container">
            <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
              <div className="section">
                  <div className="section-header text-center">
                      <h3>About Us</h3>
                  </div>
                  <div className="section-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam fuga ab, asperiores quidem suscipit quia quos exercitationem, totam ipsum odit molestias, beatae porro possimus consectetur expedita sequi excepturi adipisci reiciendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dolorem quam, perferendis ipsum modi iusto fugiat, iste quia asperiores magnam!
                    
                  </div>
              </div>

              <div className="section row">
                  <div className="section-header text-center">
                      <h3>The Team </h3>
                  </div>
                  <div className="section-body">
                    <TeamCardsWidget />
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
