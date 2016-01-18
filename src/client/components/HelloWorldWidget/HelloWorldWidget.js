import React from 'react'

export default class HelloWorld extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>Hello, {this.props.name}</div>
    )
  }
}

HelloWorld.propTypes = {
  name: React.PropTypes.string
}
