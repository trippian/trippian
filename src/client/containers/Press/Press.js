import React, {
  Component, PropTypes
}
from 'react'

export default class Press extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Press</h2>
        {name}
      </div>
    )
  }
}
Press.propTypes = {
  name: PropTypes.string
}
Press.displayName = 'PressPage'
