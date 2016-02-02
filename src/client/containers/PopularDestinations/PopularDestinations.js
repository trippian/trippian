import React, {
  Component, PropTypes
}
from 'react'
import {
  JumbotronWidget
}
from '../../components/index'
export default class PopularDestinations extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="destination-page">
        <JumbotronWidget title="Popular Destinations" subTitle="Explore the top rated destinations around the world"/>
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
