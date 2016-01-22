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
    // console.log('inside destination list', this.props.dataList, this.props.dataList.length)
    return (
      <div className="popular-destinations section-body clearfix">
        { this.props.dataList.map((destination, key) => {
           return <DestinationListItemWidget key={key} {...destination} />
        })}
      </div>
    )
  }
}
DestinationListWidget.propTypes = {
  name: PropTypes.string
}

DestinationListWidget.displayName = 'DestinationListWidget'
