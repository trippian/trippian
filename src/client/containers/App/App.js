import React, {
  Component, PropTypes
}
from 'react'

import {
  NavWidget, FooterWidget
}
from '../../components/index'
import {
  getPathNameFromHash
}
from '../../../shared/utils/clientUtils'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPath: '/'
    }
  }

  componentDidMount() {
    this.props.history.listen(() => {
      const currentPath = getPathNameFromHash(window.location.hash)
      console.log('currentPath', currentPath)
      this.state.currentPath = currentPath
        // will need to set stateTree later 
    })
  }

  // just add the links temperarily, will move to NavWidget later 
  render() {
    return (
      <div>
        <header>
          <NavWidget currentPath={this.state.currentPath} />
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
