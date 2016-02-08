import log from '../../log'
import React from 'react'

class SaveTripWidget extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    log.info('click')
  }

  //require this file in TripListItemWidget

  render() {
    return (
      <i className="fa fa-heart" ref="searchText" onClick={handleSave.bind(null, true)}></i>
    )
  }
}


SaveTripWidget.displayName = 'SaveTripWidget'

export default SaveTripWidget
