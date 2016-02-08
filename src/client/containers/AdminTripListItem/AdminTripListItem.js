import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}
from '../../components/index'
import store from '../../redux/store'
import {
  connect
}
from 'react-redux'
import {
  getAdminTripById
}
from '../../redux/apiAdminIndex'

function mapStateToProps(state) {
  return {
    trip: state.apiAdmin.get('currentTrip')
  }
}

@
connect(mapStateToProps)
export default class AdminTripListItem extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const id = this.props.params.id
    log.info('will get destination by id', id)
    store.dispatch(getAdminTripById(id))
  }

  render() {
    log.info('***insider render', this.props.trip)
    const {
      id, title, destination, summary, details
    } = this.props.trip
    return (
      <div id="admin-destination-list-item-page">
        <h3> <b>Title:</b> {title}</h3>
        <p><b>Destination:</b> {destination}</p>
        <p><b>summary:</b> {summary}</p>
        <p><b>details:</b>{details}</p>
        <p><b>id:</b>{id}</p>
      </div>
    )
  }
}
AdminTripListItem.propTypes = {
  // name: PropTypes.string
}

AdminTripListItem.displayName = 'AdminTripListItem Page'
