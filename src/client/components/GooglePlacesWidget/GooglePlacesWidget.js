// not in use 
import log from '../../log'
import React from 'react'

class GooglePlacesWidget extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    log.info('clicked', this.refs.searchText.value)
      // Elliot is going to do something 
      //TODO use router to redirect the page to DestinationSearchResults
  }

  render() {
    return (
      <form className = {`form-inline ${this.props.className}`} role = "form" >
        <input id="searchTextField" ref="searchText" className="searchTextField form-control" font="black" type="text" size="25" placeholder="Enter a location" autoComplete="on" />
        <button type = "submit" onClick={this.handleClick.bind(this)} className = "btn btn-primary"> Go </button>
      </form>
    )
  }
}


GooglePlacesWidget.displayName = 'GooglePlacesWidget'

export default GooglePlacesWidget
