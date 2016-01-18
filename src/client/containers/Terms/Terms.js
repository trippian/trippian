import React, {
  Component, PropTypes
}
from 'react'

export default class Terms extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Terms</h2>
        {name}
      </div>
    )
  }
}
Terms.propTypes = {
  name: PropTypes.string
}

Terms.displayName = 'Terms Page'
