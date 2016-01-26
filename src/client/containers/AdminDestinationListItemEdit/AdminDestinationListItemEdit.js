import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}
from '../../components/index'
import {
  Table
}
from 'react-bootstrap'

export default class AdminDestinationListItemEdit extends Component {
  constructor(props) {
    super(props)
  }

  handleDelete() {
    console.log('deleting')
  }

  render() {

    return (
      <div id="admin-destination-page">
        <h3>AdminDestinationListItemEdit</h3>
      </div>
    )
  }
}
AdminDestinationListItemEdit.propTypes = {
  // name: PropTypes.string
}

AdminDestinationListItemEdit.displayName = 'AdminDestinationListItemEdit Page'
