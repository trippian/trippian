import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}
from '../../components/index'
import {
  FormattedMessage, FormattedDate
, FormattedNumber, FormattedTime, FormattedHTMLMessage, FormattedPlural
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta natus quidem, expedita ipsam, veritatis quo excepturi. Beatae enim, eius doloribus esse aperiam animi aliquam ducimus. In eos corporis voluptate harum.
              <FormattedMessage
                  id="about.title"
                  description="this is a formated title message in about page"
                  defaultMessage="About Page "
              />

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
