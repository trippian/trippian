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

export default class Press extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div id="press-page">
          <JumbotronWidget title="Press" subTitle="This is the press subtitle" />
            <div className="container main-content-container">
              <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
                Press page text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta natus quidem, expedita ipsam, veritatis quo excepturi. Beatae enim, eius doloribus esse aperiam animi aliquam ducimus. In eos corporis voluptate harum.
                <FormattedMessage id="press.title" description="this is a formatted title message in press page" defaultMessage="Press Page" />
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
