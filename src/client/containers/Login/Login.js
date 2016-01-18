import React, {
  Component, PropTypes
}
from 'react'

export default class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        {name}
      </div>
    )
  }
}
Login.propTypes = {
  name: PropTypes.string
}
