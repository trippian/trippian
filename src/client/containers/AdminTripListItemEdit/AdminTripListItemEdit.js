import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}
from '../../components/index'

export default class AdminTripListItemEdit extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="admin-trippian-page">
        <h3>AdminTripListItemEdit</h3>
      </div>
    )
  }
}
AdminTripListItemEdit.propTypes = {
  // name: PropTypes.string
}

AdminTripListItemEdit.displayName = 'AdminTripListItemEdit Page'
