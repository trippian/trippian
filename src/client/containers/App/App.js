import React, {
  Component, PropTypes
}
from 'react'

import {
  NavWidget, FooterWidget
}
from '../../components/index'

export default class App extends Component {

  constructor(props) {
    super(props)
  }

  // just add the links temperarily, will move to NavWidget later 
  render() {
    return (
      <div>
        <header>
          <NavWidget />
        </header>
        <main className="row">
          {this.props.children}
        </main>
        <FooterWidget />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  name: PropTypes.string
}
App.displayName = 'App'
