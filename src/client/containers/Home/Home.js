import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronHomeWidget, DestinationListWidget, SectionHeaderWidget, TrippianListRoundWidget
}
from '../../components/index'

const popDestTitle = 'Popular Destinations'
const popDestSubTitle = 'Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet.'
const popTrippianTitle = 'Popular Trippians'
const popTrippianSubTitle = 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur.'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="home-page">
       <JumbotronHomeWidget/> 
         <div className="container">
            <div className="main-content-container">
             <div className="col-sm-12 col-md-12 content-container">
                 <div className="section">
                    <SectionHeaderWidget title={popDestTitle} subTitle={popDestSubTitle} />
                    <DestinationListWidget name="hello world" />
                  </div>

                 <div className="section">
                  <SectionHeaderWidget title={popTrippianTitle} subTitle={popTrippianSubTitle} />
                  <TrippianListRoundWidget />
                 </div>
             </div>
          </div>
         </div>
        </div>
    )
  }
}

Home.displayName = 'Home'
