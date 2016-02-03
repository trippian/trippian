import React from 'react'
import {
  defineMessages, intlShape, injectIntl
}
from 'react-intl'

const messages = defineMessages({
  searchButtonText: {
    id: 'search-box-widget.search-button-text',
    description: 'text for the search button',
    defaultMessage: 'Go'
  },
  searchInputPlaceHolder: {
    id: 'search-box-widget.search-input-place-holder',
    description: 'text for the search input placeholder',
    defaultMessage: 'Paris...'
  }
})

class SearchBoxWidget extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // Elliot is going to do something 
  }

  handleClick() {
    console.log('clicked', this.refs.searchText.value)
    const query = this.refs.searchText.value
    this.refs.searchText = ''
    this.props.history.pushState({
      query: query
    }, `destination/search/${query}`)
  }

  render() {
    const {
      formatMessage
    } = this.props.intl
    return (
      <form className = {`form-inline ${this.props.className}`} role = "form" onSubmit={this.handleClick.bind(this)}>
          <div className = "form-group" >
          <label className = "sr-only" > search for destinations < /label> 
          <input id="searchTextField" ref="searchText" className="searchTextField form-control" font="black" type="text" size="25" placeholder="Enter a location" autoComplete="on" />

          </div> 
          <button type = "submit" onClick={this.handleClick.bind(this)} className = "btn btn-primary" >
            {formatMessage(messages.searchButtonText)}
          </button> 
      </form >
    )
  }
}

SearchBoxWidget.propTypes = {
  intl: intlShape.isRequired,
  name: React.PropTypes.string,
  history: React.PropTypes.object.isRequired
}

SearchBoxWidget.displayName = 'SearchBoxWidget'

export default injectIntl(SearchBoxWidget)
