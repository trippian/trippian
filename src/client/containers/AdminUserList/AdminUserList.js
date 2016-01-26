import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}
from '../../components/index'

export default class AdminUserList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="admin-trippian-page">
        <h3>Admin User List</h3>
      </div>
    )
  }
}
AdminUserList.propTypes = {
  // name: PropTypes.string
}

AdminUserList.displayName = 'AdminUserList Page'
