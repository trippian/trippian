import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget, TripListWidget, JumbotronPlainBgWidget, JumbotronDestinationWidget
}
from '../../components/index'

import {
  DestinationDetail
}
from '../index'

import {
  connect
}
from 'react-redux'
import {
  DestinationSearchResults as appConfig
}
from '../../config/appConfig'

//******** YOU NEED TO ADD TO STORE *************
//Audrey: this one goes to apiIndex, I've moved all trippianAPI related calls to that file, as in the future, we'll need to refactor those into different files for modularity
import store from '../../redux/store'
import {
  getDestinationByName
}
from '../../redux/apiIndex'

// this page only need destination as it's data for now, maybe appState later
function mapStateToProps(state) {
  return {
    // apiTrippian: state.apiTrippian,
    appState: state.appState,
    destination: state.apiTrippian.get('destination')
  }
}

@
connect(mapStateToProps)
export default class DestinationSearchResults extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    store.dispatch(getDestinationByName(this.props.params.q))
  }

  render() {
    const {
      name, description, feature, whyVisit, popularTrips
    } = this.props.destination
      // <JumbotronPlainBgWidget title={appConfig.title} subTitle={`${appConfig.subTitle} ${this.props.params.q}`}/>
    return (
      <div id="destination-search-results-page">
        <JumbotronDestinationWidget isMetad {...this.props.destination}/>
      
        <div className="container main-content-container">
          <div className="col-sm-12 col-md-10 col-md-offset-1 content-container">
            <DestinationDetail />
          </div>
        </div>
      </div>
    )
  }
}


DestinationSearchResults.propTypes = {
  name: PropTypes.string
}
