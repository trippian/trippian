//not used yet 
import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'
import {
  destinationListPage as appConfig
}
from '../../config/appConfig'
export default class DestinationList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>{appConfig.title}</h2>
        {name}
      </div>
    )
  }
}
DestinationList.propTypes = {
  name: PropTypes.string
}

DestinationList.displayName = 'DestinationList Page'
