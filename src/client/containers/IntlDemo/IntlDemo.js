import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronTrippianWidget
}
from '../../components/index'

export default class IntlDemo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="intl-demo-page">
        <JumbotronTrippianWidget title='IntlDemo' isNoContact isTitled />
        <div className="container main-content-container">
            <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
                <div className="section inquiries">
                    <div className="section-header">
                        <h3>Intl Demos</h3>
                    </div>
                    <div className="section-body">
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
