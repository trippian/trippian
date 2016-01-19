import React, {
  Component, PropTypes
}
from 'react'

export default class TrippianSignup extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>TrippianSignup
</h2>
        {name}
      </div>
    )
  }
}
TrippianSignup.propTypes = {
  name: PropTypes.string
}
