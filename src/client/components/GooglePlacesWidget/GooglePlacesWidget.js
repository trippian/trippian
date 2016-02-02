import React from 'react'

class GooglePlacesWidget extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
  console.log('clicked', this.refs.searchText.value)
    // Elliot is going to do something 
    //TODO use router to redirect the page to DestinationSearchResults
  }

  render() {
    return (
      <div>
        <input id="searchTextField" ref="searchText" className="form-control" font="black" type="text" size="25" placeholder="Enter a location" autocomplete="on" />
        <button type = "submit" onClick={this.handleClick.bind(this)} className = "btn btn-primary"> Go </button>
      </div>
    )
  }
}


GooglePlacesWidget.displayName = 'GooglePlacesWidget'

export default GooglePlacesWidget