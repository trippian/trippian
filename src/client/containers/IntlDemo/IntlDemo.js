import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronTrippianWidget, LocalMenu
}
from '../../components/index'
import {
  FormattedMessage, FormattedDate, FormattedNumber, FormattedTime, FormattedHTMLMessage
}
from 'react-intl'
import SendButtonIntl from '../../SendButtonIntl'

export default class IntlDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: 'Eric',
        unreadCount: 4,
        lastLoginTime: Date.now() - 1000 * 60 * 60 * 24
      }
    }
  }

  handleClick() {
    console.log('intl button clicked')
  }

  render() {
    let now = Date.now()
    let num = 10000
    return (
      <div id="intl-demo-page">
        <JumbotronTrippianWidget title='IntlDemo' isNoContact isTitled />
        <div className="container main-content-container">
            <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
                <div className="section inquiries">
                    <div className="section-header">
                        <h3>Intl Demos</h3>
                        <LocalMenu />
                    </div>
                      <hr />

                    <div className="section-body">
                      <h3>Intl Component</h3>

                        <SendButtonIntl onClick={this.handleClick} />

                      <h3>FormattedMessage</h3>
                      <FormattedMessage
                          id="app.title"
                          description="this is a formated title message"
                          defaultMessage="Trippian Intl Demo Page "
                      />
                      <hr />
                      <h3>FormattedDate</h3>
                      <time dateTime={now} className="fancy-date">
                          <FormattedDate value={now} />
                      </time>
                      <hr />

                      <h3>FormattedTime</h3>
                      <time dateTime={now} className="fancy-date">
                          <FormattedTime value={now} />
                      </time>
                      <hr />

                      <h3>FormattedNumber</h3>
                      <FormattedNumber value={num}>
                          {(formattedNum) => (
                              <option value={num}>{formattedNum}</option>
                          )}
                      </FormattedNumber>
                      <hr />

                      <h3>FormattedHTMLMessage</h3>
                      <FormattedHTMLMessage
                       id="app.rich_description"
                       description="this is a formated html message"
                       defaultMessage='<h2 style="color: red">大号字 - rich html</h2>'
                       />
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
IntlDemo.propTypes = {
  name: PropTypes.string
}

IntlDemo.displayName = 'IntlDemo Page'
