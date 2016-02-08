import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'
import {
  photos as appConfig
}
from '../../config/appConfig'

import ImageLoader from 'react-imageloader'

export default class ImageLoaderWidget extends Component {
  constructor(props) {
    super(props)
  }

  preloader() {
    // return <img src={appConfig.spinner} />
    return <h2>Loading...</h2>
  }

  render() {
    return (
      <ImageLoader src={this.props.src} preloader={this.preLoader}>
            <div className="image-loading-error">
                Something went wrong!
            </div> 
      </ImageLoader>
    )
  }
}



ImageLoaderWidget.displayName = 'ImageLoaderWidget'
