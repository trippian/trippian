import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}
from '../../components/index'

export default class AdminDestinationList extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div id="admin-destination-page">
        <h3>Destination List</h3>
      </div>
    )
  }
}
AdminDestinationList.propTypes = {
  // name: PropTypes.string
}

AdminDestinationList.displayName = 'AdminDestinationList Page'
