import React, {
  Component, PropTypes
}
from 'react'

export default class DestinationPost extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>DestinationPost</h2>
        {name}
      </div>
    )
  }
}
DestinationPost.propTypes = {
  name: PropTypes.string
}

DestinationPost.displayName = 'DestinationPost Page'