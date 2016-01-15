import React, {
  Component, PropTypes
}
from 'react'
import ReactDOM from 'react-dom'

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div> {this.props.name}</div>
    )
  }
}


ReactDOM.render( < HelloWorld name = "Joe hi" / > , document.getElementById('app'))
