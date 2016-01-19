import React, {
  Component, PropTypes
}
from 'react'
import {
  DestinationListItemWidget
}
from '../index'

export default class DestinationListWidget extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="popular-destinations section-body clearfix">
        <DestinationListItemWidget />
        <DestinationListItemWidget />
        <DestinationListItemWidget />
        <DestinationListItemWidget />
        <DestinationListItemWidget />
        <DestinationListItemWidget />
      </div>
    )
  }
}
DestinationListWidget.propTypes = {
  name: PropTypes.string
}

DestinationListWidget.displayName = 'DestinationListWidget'
