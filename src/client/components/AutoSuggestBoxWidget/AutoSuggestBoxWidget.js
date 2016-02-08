import log from '../../log'
import React from 'react'
import Geosuggest from 'react-geosuggest'
import {
  setSearchText
}
from '../../redux/actionCreators'
import store from '../../redux/store'
import {
  AutoSuggestBoxWidget as appConfig
}
from '../../config/appConfig'

// this result will always tied to the destinationName at the store
class AutoSuggestBoxWidget extends React.Component {
  constructor(props) {
    super(props)
  }
  onFocus() {
    // log.info('onFocus')
  }
  onBlur() {
    // log.info('onBlur')
  }

  onChange(value) {
    // log.info('input changes to :' + value);
  }

  onSuggestSelect(suggest) {
    log.info(suggest)
    store.dispatch(setSearchText(suggest))
  }
  render() {
    return (
      <Geosuggest
        fixtures={appConfig.fixtures}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onChange={this.onChange}
        onSuggestSelect={this.onSuggestSelect}
        location={new google.maps.LatLng(53.558572, 9.9278215)}
        radius="20" />
    )
  }
}


AutoSuggestBoxWidget.displayName = 'AutoSuggestBoxWidget'

export default AutoSuggestBoxWidget
