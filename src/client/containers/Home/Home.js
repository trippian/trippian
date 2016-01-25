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
  getDestinations, getTrippians
}
from '../../utils/apiTrippian'

import {
  FormattedNumber, FormattedPlural, FormattedMessage, defineMessages, intlShape, injectIntl
}
from 'react-intl'

const messages = defineMessages({
  jumbotronTitle: {
    id: 'home.jumbotron-title',
    description: 'title for jumbotron',
    defaultMessage: 'Start Now'
  },
  jumbotronSubTitle: {
    id: 'home.jumbotron-sub-title',
    description: 'sub title for jumbotron',
    defaultMessage: 'Find your local travel companion around the world'
  },
  popularDestinationsTitle: {
    id: 'home.popular-destinations-title',
    description: 'title for popular destinations',
    defaultMessage: 'Popular Destinations'
  },
  popularDestinationsSubTitle: {
    id: 'home.popular-destinations-sub-title',
    description: 'sub title for popular destinations',
    defaultMessage: 'Explore popular destinations around the world'
  },
  popularTrippiansTitle: {
    id: 'home.popular-trippians-title',
    description: 'title for popular Trippians',
    defaultMessage: 'Popular Trippians'
  },
  popularTrippiansSubTitle: {
    id: 'home.popular-trippians-sub-title',
    description: 'sub title for popular Trippians',
    defaultMessage: 'Connect with popular Trippians, find interesting trips and more...'
  }

})

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Eric',
      unreadCount: 1000,
      popularDestinations: [],
      popularTrippians: []
    }
  }

  componentDidMount() {
    getTrippians('popular').then((data) => {
      console.log('got trippian data', data)
      this.setState({
        popularTrippians: data
      })
    })
    getDestinations('popular').then((data) => {
      console.log('got destination data', data)
      this.setState({
        popularDestinations: data
      })
    })
  }

  render() {
    const {
      name, unreadCount
    } = this.state

    const {
      formatMessage
    } = this.props.intl

    return (
      <div id="home-page">
       <JumbotronHomeWidget title={formatMessage(messages.jumbotronTitle)} subTitle={formatMessage(messages.jumbotronSubTitle)}/> 
         <div className="container">
            <div className="main-content-container">
             <div className="col-sm-12 col-md-12 content-container">
                 <div className="section">
                    <SectionHeaderWidget title={formatMessage(messages.popularDestinationsTitle)} subTitle={formatMessage(messages.popularDestinationsSubTitle)} />
                    <DestinationListWidget dataList={this.state.popularDestinations} name="hello world" />
                  </div>
  
                 <div className="section">
                  <SectionHeaderWidget title={formatMessage(messages.popularTrippiansTitle)} subTitle={formatMessage(messages.popularTrippiansSubTitle)} />
                  <TrippianListRoundWidget dataList={this.state.popularTrippians} />
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
Home.propTypes = {
  intl: intlShape.isRequired
}

export default injectIntl(Home)
