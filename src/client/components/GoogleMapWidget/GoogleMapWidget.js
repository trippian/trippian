import React, {
  Component, PropTypes
}
from 'react'
import {
  defaults as appConfigDefault
}
from '../../config/appConfig'
const appConfig = appConfigDefault.map

export default class GoogleMapWidget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialZoom: appConfig.initialZoom,
      initialLat: appConfig.initialLat,
      initialLng: appConfig.initialLng,
      shouldLoadInitialMap: appConfig.shouldLoadInitialMap
    }
  }

  componentMount() {
    if (this.state.shouldLoadInitialMap) {
      const myLatLng = {
        lat: this.state.initialLat,
        lng: this.state.initialLng
      }
      const map = new google.maps.Map(document.querySelector('.map_canvas'), {
        center: myLatLng,
        scrollwheel: false,
        zoom: this.state.initialZoom
      })

      const marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: appConfig.markerTitle
      })
    }
  }

  // Made a decision here, only load the map once the position data is in place 
  // We could initialize the map, but it's expensive and not intuitive for the position transition 
  componentWillReceiveProps(newProps) {
    const myLatLng = {
      lat: newProps.lat,
      lng: newProps.lng
    }

    // Create a map object and specify the DOM element for display.
    const map = new google.maps.Map(document.querySelector('.map_canvas'), {
      center: myLatLng,
      scrollwheel: false,
      zoom: newProps.zoom || this.state.initialZoom
    })

    // Create a marker and set its position.
    const marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      title: newProps.markerTitle || appConfig.markerTitle
    })
  }

  render() {
    return <span></span>
  }
}
GoogleMapWidget.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  markerTitle: PropTypes.string,
  zoom: PropTypes.number
}
GoogleMapWidget.displayName = 'GoogleMapWidget'
export default GoogleMapWidget
