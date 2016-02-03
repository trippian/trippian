import React from 'react'

class SaveTripWidget extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick(){
    console.log('click')
    //should push to the user's array of favorite trips
  }

  //require this file in TripListItemWidget

  render() {
    return (
      <i className="fa fa-heart" ref="searchText"></i>
    )
  }
}


SaveTripWidget.displayName = 'SaveTripWidget'

export default SaveTripWidget