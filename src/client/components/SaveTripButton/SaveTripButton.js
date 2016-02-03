import React from 'react'

class SaveTripButton extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick(){
    console.log('click')
  }

  //require this file in TripListItemWidget

  render() {
    return (
      <i className="fa fa-heart" ref="searchText" onClick={handleSave.bind(null, true)}></i>
    )
  }
}


SaveTripButton.displayName = 'SaveTripButton'

export default SaveTripButton