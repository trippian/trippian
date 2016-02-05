import React, {
  Component, PropTypes
}
from 'react'
import {
  JumbotronTripWidget
}
from '../../components/index'
import store from '../../redux/store'
import {
  connect
}
from 'react-redux'
import {
  getTripById
}
from '../../redux/apiIndex'
import {
  photos as appConfig
}
from '../../config/appConfig'

function mapStateToProps(state) {
  return {
    trip: state.apiTrippian.get('trip')
  }
}

@
connect(mapStateToProps)
export default class Trip extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const id = this.props.params.id
    console.log('will get trip by id', id)
    store.dispatch(getTripById(id, true))
  }

  render() {
    console.log('..inside trip render', this.props.trip, this.props.trip.user)
    const {
      title, user, feature
    } = this.props.trip
    return (
      <div id="destination-page">
        <JumbotronTripWidget metaTitle={title} user={user} backgroundFeature={feature} />
        <div className="container main-content-container">
          <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
              {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
Trip.propTypes = {
  trip: PropTypes.object,
  name: PropTypes.string
}


Trip.displayName = 'Trip Page'
