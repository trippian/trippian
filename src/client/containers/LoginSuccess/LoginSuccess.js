import React, {
  Component, PropTypes
}
from 'react'

export default class LoginSuccess extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="login">
          <h3>LoginSuccess</h3>
          you logged in 
      </div>
    )
  }
}
LoginSuccess.propTypes = {
  name: PropTypes.string
}
