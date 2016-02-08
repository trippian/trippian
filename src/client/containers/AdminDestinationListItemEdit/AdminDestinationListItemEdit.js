import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'
import {
  getDestinationById, postDestination
}
from '../../redux/apiIndex'
import store from '../../redux/store'

import {
  connect
}
from 'react-redux'
import {
  DestinationPostFormWidget
}
from '../../components/index'
  // 1. read the id from params, user DestinationById to get the data(optional), 
  // 2. set the store's current Editing Item to that data, 
  // 3. and prefill the destinationPostForm with the data 

function mapStateToProps(state) {
  return {
    destination: state.apiTrippian.get('destination'),
    isFormSubmitting: state.appState.get('isFormSubmitting'),
    isFormSubmitted: state.appState.get('isFormSubmitted')
  }
}

@
connect(mapStateToProps)
export default class AdminDestinationListItemEdit extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    store.dispatch(getDestinationById(this.props.params.id))
    log.info('inside AdminDestinationListItemEdit render', this.props.params)
  }

  handleDelete() {
    log.info('deleting')
  }

  handleSubmit(data) {
    log.info('posting data from form, submitting?', data, this.props.isFormSubmitted, this.props.isFormSubmitting)
    store.dispatch(postDestination(data))
    this.setAlert('success', 'Successfully submitted data', `${data.name} ${data.description}`)
  }
  handleResetForm() {
    log.info('reseting')

  }


  render() {
    const {
      name, description, feature, whyVisit, album, lat, lng
    } = this.props.destination
    log.info('inside AdminDestinationListItemEdit render', this.props.destination)

    return (
      <div id="admin-destination-page">
        <h3>AdminDestinationListItemEdit</h3>
        <DestinationPostFormWidget 
          onSubmit={this.handleSubmit.bind(this)} 
          resetForm={this.handleResetForm.bind(this)} 
          submitting={this.props.isFormSubmitting}
          data={this.props.destination} />

        {description} {name}
        
        <h2>{whyVisit}</h2>
       
      </div>
    )
  }
}
AdminDestinationListItemEdit.propTypes = {
  // name: PropTypes.string
}

AdminDestinationListItemEdit.displayName = 'AdminDestinationListItemEdit Page'
