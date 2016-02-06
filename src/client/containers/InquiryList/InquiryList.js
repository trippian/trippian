//current not in use
import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronTrippianWidget, InquiryListWidget
}
from '../../components/index'

export default class InquiryList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="trippian-edit-page">
        <JumbotronTrippianWidget title='My Inquiries' isNoContact isTitled />
        <div className="container main-content-container">
            <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
                <div className="section inquiries">
                    <div className="section-header">
                        <h3>My Inquiries</h3>
                    </div>
                    <div className="section-body">
                      <InquiryListWidget />
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
InquiryList.propTypes = {
  name: PropTypes.string
}

InquiryList.displayName = 'InquiryList Page'
