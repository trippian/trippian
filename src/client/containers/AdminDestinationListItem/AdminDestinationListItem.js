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

export default class AdminDestinationListItem extends Component {
  constructor(props) {
    super(props)
  }

  handleDelete() {
    console.log('deleting')
  }

  render() {

    return (
      <div id="admin-destination-page">
        <h3>AdminDestinationListItem</h3>
      </div>
    )
  }
}
AdminDestinationListItem.propTypes = {
  // name: PropTypes.string
}

AdminDestinationListItem.displayName = 'AdminDestinationListItem Page'
