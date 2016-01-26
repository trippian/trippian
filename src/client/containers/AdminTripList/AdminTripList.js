import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}
from '../../components/index'

export default class AdminTripList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="admin-trippian-page">
        <h3>Admin Trip List</h3>
      </div>
    )
  }
}
AdminTripList.propTypes = {
  // name: PropTypes.string
}

AdminTripList.displayName = 'AdminTripList Page'
