import React, {
  Component, PropTypes
}
from 'react'

export default class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>About</h2>
        {name}
      </div>
    )
  }
}
About.propTypes = {
  name: PropTypes.string
}

About.displayName = 'About Page'
