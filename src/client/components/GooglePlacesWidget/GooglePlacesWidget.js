import React, {
  Component
}
from 'react'

class GooglePlacesWidget extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <input id="searchTextField" className="form-control" font="black" type="text" size="50" placeholder="Enter a location" autocomplete="on" />
      </div>
    )
  }
}


GooglePlacesWidget.displayName = 'GooglePlacesWidget'

export default GooglePlacesWidget