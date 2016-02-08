import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}
from '../../components/index'

export default class AdminUserListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="admin-trippian-page">
        <h3>AdminUserListItem</h3>
      </div>
    )
  }
}
AdminUserListItem.propTypes = {
  // name: PropTypes.string
}

AdminUserListItem.displayName = 'AdminUserListItem Page'
