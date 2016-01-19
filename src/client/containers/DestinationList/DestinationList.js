import React, {
  Component, PropTypes
}
from 'react'

export default class DestinationList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>DestinationList</h2>
        {name}
      </div>
    )
  }
}
DestinationList.propTypes = {
  name: PropTypes.string
}

DestinationList.displayName = 'DestinationList Page'
