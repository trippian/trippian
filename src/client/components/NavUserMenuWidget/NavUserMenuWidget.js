//not in user
import log from '../../log'
import React from 'react'

export default class NavUserMenuWidget extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>Hello, {this.props.name}</div>
    )
  }
}

NavUserMenuWidget.propTypes = {
  name: React.PropTypes.string
}
NavUserMenuWidget.displayName = 'NavUserMenuWidget'
