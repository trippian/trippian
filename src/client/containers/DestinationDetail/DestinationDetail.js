import React, {
  Component, PropTypes
}
from 'react'

export default class DestinationDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>DestinationDetail</h2>
        {name}
      </div>
    )
  }
}
DestinationDetail.propTypes = {
  name: PropTypes.string
}

DestinationDetail.displayName = 'DestinationDetail Page'
