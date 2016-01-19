import React, {
  Component, PropTypes
}
from 'react'

export default class InquiryList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>InquiryList</h2>
        {name}
      </div>
    )
  }
}
InquiryList.propTypes = {
  name: PropTypes.string
}

InquiryList.displayName = 'InquiryList Page'
