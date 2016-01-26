import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}
from '../../components/index'

export default class AdminTripListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="admin-trippian-page">
        <h3>AdminTripListItem</h3>
      </div>
    )
  }
}
AdminTripListItem.propTypes = {
  // name: PropTypes.string
}

AdminTripListItem.displayName = 'AdminTripListItem Page'
