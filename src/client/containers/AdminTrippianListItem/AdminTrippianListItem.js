import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}
from '../../components/index'

export default class AdminTrippianListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="admin-trippian-page">
        <h3>AdminTrippianListItem</h3>
      </div>
    )
  }
}

AdminTrippianListItem.propTypes = {
  // name: PropTypes.string
}

AdminTrippianListItem.displayName = 'AdminTrippianListItem Page'
