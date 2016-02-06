import React from 'react'
import {
  defineMessages, intlShape, injectIntl
}
from 'react-intl'
import Geosuggest from 'react-geosuggest'
import {
  AutoSuggestBoxWidget
}
from '../index'
import store from '../../redux/store'
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
      // FIX: pushState will reload the page, it seems to be a problem working in progress: https://github.com/rackt/history/issues/105
    store.getState().appState.get('history').pushState({
      state: searchText
    }, `destination/search/${searchText}`)

    // this.props.history.pushState({
    //   searchText: searchText
    // }, `destination/search/${searchText}`)
  }

  render() {
    const {
      formatMessage
    } = this.props.intl
    return (
      <form className = {`form-inline ${this.props.className}`} role = "form" onSubmit={this.handleClick.bind(this)}>
          <div className = "form-group" >
          <label className = "sr-only" > search for destinations < /label>            
            <AutoSuggestBoxWidget />
          </div> 
          <button type = "submit" onClick={this.handleClick.bind(this)} className = "btn btn-primary" >
            Go
          </button> 
      </form >
    )
  }
}

SearchBoxWidget.propTypes = {
  intl: intlShape.isRequired,
  name: React.PropTypes.string
    // history: React.PropTypes.object.isRequired
}

SearchBoxWidget.displayName = 'SearchBoxWidget'

export default injectIntl(SearchBoxWidget)
