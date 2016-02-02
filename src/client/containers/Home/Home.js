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

import {
  getDestinations, getTrippians
}
from '../../utils/apiTrippian'
import {
  bindActionCreators
}
from 'redux'
import store, {
  getPopularDestinations, getPopularTrippians
}
from '../../redux/store'
import {
  connect
}
from 'react-redux'

import {
  FormattedNumber, FormattedPlural, FormattedMessage, defineMessages, intlShape, injectIntl
}
from 'react-intl'

import {
  setUsername, setDisplayName
}
from '../../redux/actionCreators'

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
      alert: ''
    }
  }

  componentDidMount() {
    // ask redux store to get remote data, if needed, can do something after then 
    store.dispatch(getPopularDestinations())
    store.dispatch(getPopularTrippians())
  }

  handleClick() {
    // demo how to use 
    this.props.setUsername('James')
    this.props.setDisplayName('James Zhang')
  }

  render() {
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
                    <DestinationListWidget dataList={this.props.popularDestinations} name="hello world" />
                  </div>
  
                 <div className="section">
                  <SectionHeaderWidget title={formatMessage(messages.popularTrippiansTitle)} subTitle={formatMessage(messages.popularTrippiansSubTitle)} />
                  <TrippianListRoundWidget dataList={this.props.popularTrippians} />
                 </div>
             </div>

          </div>
         </div>
        </div>
    )
  }
}

Home.displayName = 'Home'
Home.propTypes = {
  intl: intlShape.isRequired,
  setUsername: PropTypes.func.isRequired,
  setDisplayName: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired
}

// added a lot of store data here for testing purpose, will remove later
function mapStateToProps(state) {
  return {
    apiTrippian: state.apiTrippian,
    appState: state.appState,
    username: state.appState.get('username'),
    popularDestinations: state.apiTrippian.get('destinations'),
    popularTrippians: state.apiTrippian.get('trippians'),
    error: state.apiTrippian.get('error'),
    displayName: state.appState.get('displayName')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setUsername: bindActionCreators(setUsername, dispatch),
    setDisplayName: bindActionCreators(setDisplayName, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Home))
