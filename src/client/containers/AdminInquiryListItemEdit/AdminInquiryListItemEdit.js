import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}
from '../../components/index'

export default class AdminInquiryListItemEdit extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="admin-trippian-page">
        <h3>AdminInquiryListItemEdit</h3>
      </div>
    )
  }
}
AdminInquiryListItemEdit.propTypes = {
  // name: PropTypes.string
}

AdminInquiryListItemEdit.displayName = 'AdminInquiryListItemEdit Page'
