import React, {
  Component, PropTypes
}
from 'react'

export default class JoinUs extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>JoinUs</h2>
        {name}
      </div>
    )
  }
}
JoinUs.propTypes = {
  name: PropTypes.string
}

JoinUs.displayName = 'JoinUs Page'
