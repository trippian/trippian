import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronDestinationWidget, CarouselWidget, SectionHeaderWidget, TrippianListWidget
}

from '../../components/index'


const popTrippianTitle = 'Popular Trippians'
const popTrippianSubTitle = 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur.'

export default class DestinationDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="destination-page">
        <JumbotronDestinationWidget />
        <div className="container main-content-container">
          <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
              <div className="row section">
                <div className="section-body col-sm-12 col-md-12">
                  <div className="col-sm-12 col-md-6">
                    <CarouselWidget />
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <h2>Why Visit</h2> 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, unde. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro modi praesentium rerum sint alias mollitia!
                  </div>
                </div>
              </div>
              <div className="row section">
                <SectionHeaderWidget title={popTrippianTitle} subTitle={popTrippianSubTitle} />
                <div className="section-body">
                  <TrippianListWidget />
                </div>
              </div>


          </div>
        </div>
      </div>
    )
  }
}
DestinationDetail.propTypes = {
  name: PropTypes.string
}

DestinationDetail.displayName = 'DestinationDetail Page'
