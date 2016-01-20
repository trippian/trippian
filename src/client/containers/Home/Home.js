import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronHomeWidget, DestinationListWidget, SectionHeaderWidget, TrippianListRoundWidget
}
from '../../components/index'

import {
  homePage as appConfig
}
from '../../config/appConfig'

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
                    <SectionHeaderWidget title={appConfig.popularDestinations.title} subTitle={appConfig.popularDestinations.subTitle} />
                    <DestinationListWidget name="hello world" />
                  </div>
  
                 <div className="section">
                  <SectionHeaderWidget title={appConfig.popularTrippians.title} subTitle={appConfig.popularTrippians.subTitle} />
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
