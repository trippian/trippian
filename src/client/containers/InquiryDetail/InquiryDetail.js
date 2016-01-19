import React, {
  Component, PropTypes
}
from 'react'

export default class InquiryDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>InquiryDetail</h2>
        {name}
      </div>
    )
  }
}
InquiryDetail.propTypes = {
  name: PropTypes.string
}

InquiryDetail.displayName = 'InquiryDetail Page'
