// In progress: this is an attempt to replace admin function. Similar to myPostedTrips, it will require server to return myPostedDestinations to function
// Depend on user's level, we can open create destination for trusted trippians, so as to reduce our data input
// We'll also need to add one extra field (accepted) to indicate whether we'll use trippian's submit as our official public entry

import React, {
  Component, PropTypes
}
from 'react'

import {
  DestinationListWidget, DestinationPostFormWidget
}
from '../../components/index'

import {
  connect
}
from 'react-redux'
import store from '../../redux/store'
import {
  postDestination
}
from '../../redux/apiIndex'
import {
  MyDestinationPost as appConfig
}
from '../../config/appConfig'

function mapStateToProps(state) {
  return {
    dashboard: state.apiTrippian.get('dashboard'),
    destination: state.apiTrippian.get('destination'),
    isFormSubmitting: state.appState.get('isFormSubmitting'),
    isFormSubmitted: state.appState.get('isFormSubmitted')
  }
}

@
connect(mapStateToProps)
export default class MyDestinationPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: true
    }
  }

  handleSubmit(data) {
    console.log('posting data from destination form', data)
    store.dispatch(postDestination(data))
  }
  handleResetForm() {}

  render() {
    // const {
    //   postedTrips
    // } = this.props.dashboard

    console.log('inside MyDestinationPost render')
    return (
      <div className="my-posted-trips-page">
        <h2>Create an Destination</h2>
        <button onClick={()=> this.setState({showForm: !this.state.showForm})} className="btn btn-primary pull-right">
          {this.state.showForm ? appConfig.postDestinationButtonHideText : appConfig.postDestinationButtonShowText}
        </button>
        
        {this.state.showForm && 
          <DestinationPostFormWidget 
              onSubmit={this.handleSubmit.bind(this)} 
              resetForm={this.handleResetForm.bind(this)} 
              submitting={this.props.isFormSubmitting}
              data={this.props.destination} /> 
        }
      </div >

    )
  }
}



MyDestinationPost.propTypes = {
  name: PropTypes.string
}

MyDestinationPost.displayName = 'MyDestinationPost Page'
