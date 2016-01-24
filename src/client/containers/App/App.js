import React, {
  Component, PropTypes
}
from 'react'
import {
  connect, Provider
}
from 'react-redux'

import {
  NavWidget, FooterWidget
}
from '../../components/index'
import {
  getPathNameFromHash
}
from '../../../shared/utils/clientUtils'

import store from '../../redux/store'

// function mapStateToProps(state) {
//   return {
//     messages: state.appState.messages
//   }
// }

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPath: '/',
      locale: store.getState().appState.get('locale')
    }

  }
  componentDidMount() {
    // console.log('messages', this.context)
    // store.subscribe(() => {
    //   const newLocale = store.getState().appState.get('locale')
    //   console.log(store.getState())
    //   if (newLocale !== this.state.locale) {
    //     this.state.locale = newLocale
    //     messages = store.getState().appState.get('messages')
    //     this.setState({
    //       messages, messages
    //     })
    //     console.log('locale changed', locale, messages)
    //   }
    // })

    this.props.history.listen(() => {
      const query = window.location.search
      const currentPath = getPathNameFromHash(window.location.hash)
      console.log('currentPath', currentPath, query)
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

// export default connect(mapStateToProps)(App)
export default App
