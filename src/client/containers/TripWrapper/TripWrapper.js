import React, {
  Component, PropTypes
}
from 'react'

export default class TripWrapper extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="trip-wrapper">
        {this.props.children}
      </div>
    )
  }
}
TripWrapper.propTypes = {
  name: PropTypes.string
}
TripWrapper.displayName = 'TripWrapper'
