import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}
from '../../components/index'

export default class AdminInquiryListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="admin-trippian-page">
        <h3>AdminInquiryListItem</h3>
      </div>
    )
  }
}
AdminInquiryListItem.propTypes = {
  // name: PropTypes.string
}

AdminInquiryListItem.displayName = 'AdminInquiryListItem Page'
