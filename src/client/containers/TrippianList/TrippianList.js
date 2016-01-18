import React, {
  Component, PropTypes
}
from 'react'

export default class TrippianList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>TrippianList</h2>
        {name}
      </div>
    )
  }
}
TrippianList.propTypes = {
  name: PropTypes.string
}
