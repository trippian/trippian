import React from 'react'
import Geosuggest from 'react-geosuggest'
import {
  setSearchText
}
from '../../redux/actionCreators'
import store from '../../redux/store'
const fixtures = [{
  label: 'Hong Kong',
  location: {
    lat: 22.396428,
    lng: 114.10949700000003
  }
}, {
  label: 'New York, NY, United States',
  location: {
    lat: 40.7033127,
    lng: -73.979681
  }
}, {
  label: 'Rio de Janeiro - State of Rio de Janeiro, Brazil',
  location: {
    lat: -22.066452,
    lng: -42.9232368
  }
}, {
  label: 'Tokyo, Japan',
  location: {
    lat: 35.673343,
    lng: 139.710388
  }
}]

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
        fixtures={fixtures}
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
