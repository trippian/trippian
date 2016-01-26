import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}
from '../../components/index'

export default class AdminTrippianList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="admin-trippian-page">
        <h3>Trippian List</h3>
      </div>
    )
  }
}
AdminTrippianList.propTypes = {
  // name: PropTypes.string
}

AdminTrippianList.displayName = 'AdminTrippianList Page'
