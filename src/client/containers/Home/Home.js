import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronHomeWidget, DestinationListWidget, SectionHeaderWidget, RelativeTimeWidget, TrippianListRoundWidget
}
from '../../components/index'

import {
  homePage as appConfig
}
from '../../config/appConfig'


import {
  FormattedNumber, FormattedPlural
}
from 'react-intl'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Eric',
      unreadCount: 1000
    }
  }

  render() {
    const {
      name, unreadCount
    } = this.state
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

                 <RelativeTimeWidget date="Wed Jan 20 2016 19:36:40 GMT-0800 (PST)" intl='fr' ></RelativeTimeWidget>
                 Hello <b>{name}</b>, you have {' '}
                                 <FormattedNumber value={unreadCount} /> {' '}
                                 <FormattedPlural value={unreadCount}
                                     one="message"
                                     other="messages"
                                 />.
             </div>
          </div>
         </div>
        </div>
    )
  }
}

Home.displayName = 'Home'
