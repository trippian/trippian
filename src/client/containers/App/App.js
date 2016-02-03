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
import {
  IntlProvider, addLocaleData
}
from 'react-intl'
import {
  Enhance
}
from './Enhance'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPath: '/',
      locale: store.getState().appState.get('locale') || 'en-US',
      messages: store.getState().appState.get('messages')
    }
  }
  componentDidMount() {
    // temp solution: listen to the store for any locale change and update the App state
    // ideally, we shoul use store connect and map to automatically update the App Component's state
    // store.subscribe(() => {
    //   const newLocale = store.getState().appState.get('locale')
    //   if (newLocale !== this.state.locale) {
    //     this.state.locale = newLocale
    //     const messages = store.getState().appState.get('messages')
    //     this.setState({
    //       messages: messages
    //     })
    //     console.log('locale changed', this.state.locale, messages)
    //   }
    // })
    this.props.history.listen(() => {
      const currentPath = getPathNameFromHash(window.location.hash)
      const query = window.location.search
      console.log('currentPath', currentPath, query)
      this.state.currentPath = currentPath
        // will need to set stateTree later 
    })
  }

  render() {
    return (
      <IntlProvider locale={this.state.locale} messages={this.props.messages}>
      <div>
        <header>
          <NavWidget currentPath={this.state.currentPath} username={this.props.username} displayName={this.props.displayName} isUserAdmin={this.props.isUserAdmin}/>
        </header>
        <main className="row">
          {this.props.children}
        </main>
        <FooterWidget />
      </div>
      </IntlProvider>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  name: PropTypes.string
}
App.displayName = 'App'

function mapStateToProps(state) {
  return {
    username: state.appState.get('username'),
    displayName: state.appState.get('displayName'),
    isUserAdmin: state.appState.get('isUserAdmin'),
    messages: state.appState.get('messages')
  }
}

export default Enhance(connect(mapStateToProps)(App))

// export default Enhance(App)
