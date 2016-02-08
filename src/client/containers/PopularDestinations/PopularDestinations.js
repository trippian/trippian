import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'
import {
  JumbotronWidget
}
from '../../components/index'
import {
  PopularDestinations as appConfig
}
from '../../config/appConfig'

export default class PopularDestinations extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="destination-page">
        <JumbotronWidget title={appConfig.title} subTitle={appConfig.subTitle}/>
        <div className="container main-content-container">
          <div className="col-sm-12 col-md-10 col-md-offset-1 content-container">
              <h2>Popular Destinations</h2>
          </div>
        </div>
      </div>
    )
  }
}
PopularDestinations.propTypes = {
  name: PropTypes.string
}
