import React from 'react'

export default class HelloWorld extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div> {this.props.name} hello again </div>
    )
  }
}

HelloWorld.propTypes = {
  name: React.PropTypes.string
}
