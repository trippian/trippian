import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}

from '../../components/index'
import ReactDriveIn from 'react-drive-in'
import {
  FormattedMessage, FormattedDate, FormattedNumber,
  FormattedTime, FormattedHTMLMessage, FormattedPlural
}
from 'react-intl'

export default class JoinUs extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div id="joinus-page">
          <JumbotronWidget title="JoinUs" subTitle="This is the join us subtitle" />
            <div className="container main-content-container">
              <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
                Join us page text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta natus quidem, expedita ipsam, veritatis quo excepturi. Beatae enim, eius doloribus esse aperiam animi aliquam ducimus. In eos corporis voluptate harum.
                <FormattedMessage id="joinUs.title" description="this is a formatted title message in press page" defaultMessage="Press Page" />
                <ReactDriveIn
                      show="http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.mp4"
                      poster="http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.jpg"/>
              </div>
            </div>
        </div>
      </div>
    )
  }
}
JoinUs.propTypes = {
  name: PropTypes.string
}

JoinUs.displayName = 'JoinUs Page'
