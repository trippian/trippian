import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}
from '../../components/index'

export default class AdminInquiryList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="admin-trippian-page">
        <h3>Inquiry List</h3>
      </div>
    )
  }
}
AdminInquiryList.propTypes = {
  // name: PropTypes.string
}

AdminInquiryList.displayName = 'AdminInquiryList Page'
