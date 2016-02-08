import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}
from '../../components/index'

export default class AdminTrippianListItemEdit extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="admin-trippian-page">
        <h3>AdminTrippianListItemEdit</h3>
      </div>
    )
  }
}
AdminTrippianListItemEdit.propTypes = {
  // name: PropTypes.string
}

AdminTrippianListItemEdit.displayName = 'AdminTrippianListItemEdit Page'
