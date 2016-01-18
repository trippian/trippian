import React, {
  Component, PropTypes
}
from 'react'

import {
  Link
}
from 'react-router'

export default class App extends Component {
  displayName: 'App'

    constructor(props) {
      super(props)
    }
    // just add the links temperarily, will move to NavWidget later 
  render() {
    return (
      <div>
        <h2>App</h2>
        <ul>
            <li><Link to='/'> Home </Link></li>
            <li><Link to='about'> About </Link></li>
            <li><Link to='login'> Login </Link></li>
            <li><Link to='trippian/123'> Trippian Detail </Link></li>
        </ul>
        <i>just add the links temperarily, will move to NavWidget later </i>
        {name}
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  name: PropTypes.string
}
