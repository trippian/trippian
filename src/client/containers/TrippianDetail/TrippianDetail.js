import React, {
  Component, PropTypes
}
from 'react'

export default class TrippianDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>TrippianDetail</h2>
        {name}
      </div>
    )
  }
}
TrippianDetail.propTypes = {
  name: PropTypes.string
}
