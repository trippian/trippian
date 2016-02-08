import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'

export default class EmailNotification extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>EmailNotification</h2>
        {name}
      </div>
    )
  }
}
EmailNotification.propTypes = {
  name: PropTypes.string
}

EmailNotification.displayName = 'EmailNotification Page'
