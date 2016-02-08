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
    // console.log('onFocus')
  }
  onBlur() {
    // console.log('onBlur')
  }

  onChange(value) {
    // console.log('input changes to :' + value);
  }

  onSuggestSelect(suggest) {
    console.log(suggest)
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
