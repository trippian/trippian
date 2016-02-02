import React, {
  Component, PropTypes
}
from 'react'

export default class DestinationWrapper extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="destination-wrapper">
        {this.props.children}
      </div>
    )
  }
}
DestinationWrapper.propTypes = {
  name: PropTypes.string
}
DestinationWrapper.displayName = 'DestinationWrapper'
