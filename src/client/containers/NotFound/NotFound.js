import React, {
  Component, PropTypes
}
from 'react'

export default class NotFound extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>NotFound</h2>
        {name}
      </div>
    )
  }
}
NotFound.propTypes = {
  name: PropTypes.string
}

NotFound.displayName = 'NotFound Page'
