import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}
from '../../components/index'

export default class AdminUserListItemEdit extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="admin-trippian-page">
        <h3>AdminUserListItemEdit</h3>
      </div>
    )
  }
}
AdminUserListItemEdit.propTypes = {
  // name: PropTypes.string
}

AdminUserListItemEdit.displayName = 'AdminUserListItemEdit Page'
