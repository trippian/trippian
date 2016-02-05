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
  // import store from '../../redux/store'
  // import {
  //   postTrip
  // }
  // from '../../redux/apiIndex'

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
    console.log('set the state', this.state)

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
    console.log('set the state', this.state)
  }
  render() {
    const {
      savedTrips, upVotedTrips, downVotedTrips
    } = this.props.dashboard

    console.log('inside MyTripBox render')
    return (
      <div className="my-posted-trips-page">
        <div className='menu-row text-right'>
          <button onClick={this.toggleState.bind(this, {showUpVotedTrips: true})} className="btn btn-primary">
           <i className="fa fa-thumbs-up"></i> {this.state.showUpVotedTrips ? 'Hide UpVoted' : 'UpVoted'}
          </button>
          <button onClick={this.toggleState.bind(this, {showDownVotedTrips: true})} className="btn btn-primary">
            <i className="fa fa-thumbs-down"></i>{this.state.showDownVotedTrips ? 'Hide DownVoted' : 'DownVoted'}
          </button>
          <button onClick={this.toggleState.bind(this, {showSavedTrips: true})} className="btn btn-primary">
            <i className="fa fa-inbox"></i>{this.state.showSavedTrips ? 'Hide Saved' : 'Saved'}
          </button> 
        </div>
       
        {this.state.showSavedTrips && 
          <div>
            <h2>A list of saved trips</h2>
            <TripListWidget dataList={savedTrips} emptyMessage="You haven't saved any trip yet" /> 
          </div>
        }
        {this.state.showUpVotedTrips && 
          <div>
            <h2>A list of upVotedTrips</h2>
            <TripListWidget dataList={upVotedTrips}  emptyMessage="There is no up voted trip yet" /> 
          </div>
        }
        {this.state.showDownVotedTrips && 
          <div>
            <h2>A list of downVotedTrips </h2>
            <TripListWidget dataList={downVotedTrips} emptyMessage="There is no down voted trip yet" /> 
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
