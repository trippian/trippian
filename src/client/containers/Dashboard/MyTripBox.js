import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'

import {
  TripListWidget, TripPostFormWidget
}
from '../../components/index'

import {
  connect
}
from 'react-redux'
import {
  MyTripBox as appConfig
}
from '../../config/appConfig'


function mapStateToProps(state) {
  return {
    // get the data directly from store as we already fetched in the Dashboard container
    dashboard: state.apiTrippian.get('dashboard')
  }
}

@
connect(mapStateToProps)
export default class MyTripBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showUpVotedTrips: false,
      showDownVotedTrips: false,
      showSavedTrips: true
    }
  }

  toggleState({
    showUpVotedTrips = false, showDownVotedTrips = false, showSavedTrips = false
  }) {
    log.info('set the state', this.state)

    if (showUpVotedTrips) {
      this.setState({
        showUpVotedTrips: true,
        showDownVotedTrips: false,
        showSavedTrips: false
      })
    }
    if (showDownVotedTrips) {
      this.setState({
        showUpVotedTrips: false,
        showDownVotedTrips: true,
        showSavedTrips: false
      })
    }
    if (showSavedTrips) {
      this.setState({
        showUpVotedTrips: false,
        showDownVotedTrips: false,
        showSavedTrips: true
      })
    }
    log.info('set the state', this.state)
  }
  render() {
    const {
      savedTrips, upVotedTrips, downVotedTrips
    } = this.props.dashboard

    log.info('inside MyTripBox render')
    return (
      <div className="my-posted-trips-page">
        <div className='menu-row text-right'>
          <button onClick={this.toggleState.bind(this, {showUpVotedTrips: true})} className="btn btn-primary">
           <i className="fa fa-thumbs-up"></i> {this.state.showUpVotedTrips ? appConfig.voteUp.voteUpButtonHideText : appConfig.voteUp.voteUpButtonShowText}
          </button>
          <button onClick={this.toggleState.bind(this, {showDownVotedTrips: true})} className="btn btn-primary">
            <i className="fa fa-thumbs-down"></i>{this.state.showDownVotedTrips ? appConfig.voteDown.voteDownButtonHideText : appConfig.voteDown.voteDownButtonShowText}
          </button>
          <button onClick={this.toggleState.bind(this, {showSavedTrips: true})} className="btn btn-primary">
            <i className="fa fa-inbox"></i>{this.state.showSavedTrips ? appConfig.savedTrip.savedTripButtonHideText : appConfig.savedTrip.savedTripButtonShowText}
          </button> 
        </div>
       
        {this.state.showSavedTrips && 
          <div>

            <h2>{appConfig.savedTrip.containerTitle}</h2>
            <TripListWidget dataList={savedTrips} noContentMessage={appConfig.savedTrip.noContentMessage} /> 
          </div>
        }
        {this.state.showUpVotedTrips && 
          <div>
            <h2>{appConfig.voteUp.containerTitle}</h2>
            <TripListWidget dataList={upVotedTrips}  noContentMessage={appConfig.voteUp.containerTitle} /> 
          </div>
        }
        {this.state.showDownVotedTrips && 
          <div>
            <h2>{appConfig.voteDown.containerTitle} </h2>
            <TripListWidget dataList={downVotedTrips} noContentMessage={appConfig.savedTrip.containerTitle} /> 
          </div>
        }
       
      </div >

    )
  }
}



MyTripBox.propTypes = {
  name: PropTypes.string
}

MyTripBox.displayName = 'MyTripBox Page'
