import React, {
  Component, PropTypes
}
from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        {name}
      </div>
    )
  }
}
Home.propTypes = {
  name: PropTypes.string
}
