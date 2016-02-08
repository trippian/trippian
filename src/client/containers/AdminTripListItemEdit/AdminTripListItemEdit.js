import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'
import store from '../../redux/store'
import {
  getTripById, putTrip
}
from '../../redux/apiIndex'
import {
  connect
}
from 'react-redux'

import {
  TripPostFormWidget
}
from '../../components/index'

function mapStateToProps(state) {
  return {
    isFormEditingMode: state.appState.get('isFormEditingMode'),
    trip: state.apiTrippian.get('trip'),
    isFormSubmitting: state.appState.get('isFormSubmitting'),
    isFormSubmitted: state.appState.get('isFormSubmitted')
  }
}

@
connect(mapStateToProps)
export default class AdminTripListItemEdit extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    store.dispatch(getTripById(this.props.params.id))
    log.info('inside AdminTripListItemEdit render', this.props.params)
  }

  handleDelete() {
    log.info('deleting')
  }

  handleSubmit(data) {
    log.info('updating data from form, submitting?', data, this.props.isFormSubmitted, this.props.isFormSubmitting)
    store.dispatch(putTrip(data))
  }
  handleResetForm() {
    log.info('reseting')
  }

  render() {
    const {
      destination, detail
    } = this.props.trip

    log.info('inside AdminTripListItemEdit render', this.props.trip)
    return (
      <div id="admin-trip-edit-page">
          <h3>AdminTripListItemEdit</h3>
          <TripPostFormWidget 
            onSubmit={this.handleSubmit.bind(this)} 
            resetForm={this.handleResetForm.bind(this)} 
            submitting={this.props.isFormSubmitting}
            data={this.props.destination}
            isFormEditingMode={this.props.isFormEditingMode} 
            destinationName={this.props.trip.destination}/>
          
          <h2>{destination}</h2>
          <p>{detail}</p>
         
        </div>
    )
  }
}
AdminTripListItemEdit.propTypes = {
  // name: PropTypes.string
}

AdminTripListItemEdit.displayName = 'AdminTripListItemEdit Page'
