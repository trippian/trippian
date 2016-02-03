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
    const search = store.getState().appState.get('searchText')
    const searchText = search.label
    console.log('search clicked', search, searchText)

    this.props.history.pushState({
      searchText: searchText
    }, `destination/search/${searchText}`)
  }

  render() {
    const {
      formatMessage
    } = this.props.intl
    return (
      <form className = {`form-inline ${this.props.className}`} role = "form" >
          <div className = "form-group" >
          <label className = "sr-only" > search for destinations < /label> 
          <input type="text" ref="searchText" className="form-control"  placeholder={formatMessage(messages.searchInputPlaceHolder)} / >
          </div> 
          <button type = "submit" onClick={this.handleClick.bind(this)} className = "btn btn-primary" >
            {formatMessage(messages.searchButtonText)}
          </button> 
          <a href="/#/destination/search/abc">link</a>
        </form >
    )
  }
}

SearchBoxWidget.propTypes = {
  intl: intlShape.isRequired,
  name: React.PropTypes.string
}

SearchBoxWidget.displayName = 'SearchBoxWidget'

export default injectIntl(SearchBoxWidget)
