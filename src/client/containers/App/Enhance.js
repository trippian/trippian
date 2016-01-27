import React, {
  Component
}
from 'react'
import store from '../../redux/store'
import {
  Provider
}
from 'react-redux'
  // a demo higher order component 
export const Enhance = ComposedComponent => class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    this.setState({
      data: 'Hello'
    })
  }
  render() {
    // add redux store to the root component here. Normally you'd do it in entry.js, but it didn't  work with IntlProvider
    // so we are using higher order component for this
    // https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775
    return (
      <Provider store={store}>
        <ComposedComponent {...this.props} data={this.state.data} />
      </Provider>
    )
  }
}
