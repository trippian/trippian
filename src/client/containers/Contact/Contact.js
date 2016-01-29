import React, {
  Component, PropTypes
}
from 'react'

import {
  InquiryAddFormWidget
}
from '../../components/index'

export default class Contact extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <InquiryAddFormWidget />
      </div>
    )
  }
}
Contact.propTypes = {
  // name: PropTypes.string
}

Contact.displayName = 'Contact Page'
