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
import store from '../../redux/store'
import {
  postTrip
}
from '../../redux/apiIndex'
import {
  MyPostedTrips as appConfig
}
from '../../config/appConfig'

function mapStateToProps(state) {
  return {
    // get the data directly from store as we already fetched in the Dashboard container
    dashboard: state.apiTrippian.get('dashboard'),
    newTrips: state.apiTrippian.get('newTrips')
  }
}

@
connect(mapStateToProps)
export default class MyPostedTrips extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false
    }
  }

  handleSubmit(data) {
    console.log('posting data from trip form', data)
    store.dispatch(postTrip(data))
  }


  render() {
    const {
      postedTrips
    } = this.props.dashboard
    const {
      newTrips
    } = this.props
    console.log('inside MyPostedTrips render', postedTrips)
    return (
      <div className="my-posted-trips-page">
        <button onClick={()=> this.setState({showForm: !this.state.showForm})} className="btn btn-primary pull-right">
          {this.state.showForm ? appConfig.postTripButtonHideText : appConfig.postTripButtonShowText}
        </button>

        {this.state.showForm && 
          <TripPostFormWidget onSubmit={this.handleSubmit.bind(this)} /> 
        }

        <div>
          <h2>{appConfig.containerTitle}</h2>
          <TripListWidget dataList={postedTrips.concat(newTrips)} noContentMessage={appConfig.noContentMessage}/>
        </div>
        
      </div >

    )
  }
}



MyPostedTrips.propTypes = {
  name: PropTypes.string
}

MyPostedTrips.displayName = 'MyPostedTrips Page'
