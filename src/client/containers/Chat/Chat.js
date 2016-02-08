import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'

export default class Chat extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Chat</h2>
        {name}
      </div>
    )
  }
}
Chat.propTypes = {
  name: PropTypes.string
}

Chat.displayName = 'Chat Page'
