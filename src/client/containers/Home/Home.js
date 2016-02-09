import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronHomeWidget, DestinationListWidget, SectionHeaderWidget, TrippianListRoundWidget, JumbotronVideoWidget
}
from '../../components/index'

import {
  Home as appConfig
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
import store from '../../redux/store'
import {
  getPopularDestinations, getPopularTrippians
}
from '../../redux/apiIndex'
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
    defaultMessage: appConfig.jumbotron.title
  },
  jumbotronSubTitle: {
    id: 'home.jumbotron-sub-title',
    description: 'sub title for jumbotron',
    defaultMessage: appConfig.jumbotron.subTitle
  },
  popularDestinationsTitle: {
    id: 'home.popular-destinations-title',
    description: 'title for popular destinations',
    defaultMessage: appConfig.popularDestinations.title
  },
  popularDestinationsSubTitle: {
    id: 'home.popular-destinations-sub-title',
    description: 'sub title for popular destinations',
    defaultMessage: appConfig.popularDestinations.subTitle
  },
  popularTrippiansTitle: {
    id: 'home.popular-trippians-title',
    description: 'title for popular Trippians',
    defaultMessage: appConfig.popularTrippians.subTitle
  },
  popularTrippiansSubTitle: {
    id: 'home.popular-trippians-sub-title',
    description: 'sub title for popular Trippians',
    defaultMessage: appConfig.popularTrippians.subTitle
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
    // this.props.setUsername('James')
    // this.props.setDisplayName('James Zhang')
  }

  render() {
    const {
      formatMessage
    } = this.props.intl

    // <JumbotronHomeWidget title={appConfig.jumbotron.title} subTitle={appConfig.jumbotron.subTitle} /> 

    return (
      <div id="home-page">
       <JumbotronVideoWidget />
       <JumbotronHomeWidget title={formatMessage(messages.jumbotronTitle)} subTitle={formatMessage(messages.jumbotronSubTitle)}/> 
         <div className="container">
            <div className="main-content-container">
             <div className="col-sm-12 col-md-12 content-container">
                 <div className="section">
                    <SectionHeaderWidget title={formatMessage(messages.popularDestinationsTitle)} subTitle={formatMessage(messages.popularDestinationsSubTitle)} />
                    <DestinationListWidget dataList={this.props.popularDestinations} />
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
  intl: intlShape.isRequired
    // setUsername: PropTypes.func.isRequired
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
