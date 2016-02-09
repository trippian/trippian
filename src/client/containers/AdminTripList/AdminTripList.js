import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget, TripPostFormWidget
}
from '../../components/index'
import {
  Table, Alert
}
from 'react-bootstrap'
import {
  Link
}
from 'react-router'

import {
  connect
}
from 'react-redux'
import store from '../../redux/store'
import {
  getAdminTrips, deleteAdminTripById

}
from '../../redux/apiAdminIndex'
import {
  postTrip
}
from '../../redux/apiIndex'

function mapStateToProps(state) {
  return {
    trips: state.apiAdmin.get('adminTrips'),
    trip: state.apiTrippian.get('trip'),
    isFormSubmitting: state.appState.get('isFormSubmitting'),
    isFormSubmitted: state.appState.get('isFormSubmitted')
  }
}

@
connect(mapStateToProps)
export default class AdminTripList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
      alert: {
        type: 'success',
        title: '',
        message: ''
      }
    }
  }

  componentDidMount() {
    store.dispatch(getAdminTrips())
  }

  handleDelete(id) {
    log.info('deleting trip called', id)
    store.dispatch(deleteAdminTripById(id))

  }
  handleAlertDismiss() {
    this.setAlert()
  }
  handleSubmit(data) {
    log.info('posting data from form', data)
    store.dispatch(postTrip(data))
  }
  handleResetForm() {
    log.info('will handle form reset')
  }
  setAlert(type = 'success', title = '', message = '') {
    this.setState({
      alert: {
        type: type,
        title: title,
        message: message
      }
    })
  }
  render() {
    log.info('rendering trips', this.props.trips)
    const {
      type, title, message
    } = this.state.alert
    return (
      <div id="admin-destination-page">
        {title !== '' && 
          <Alert bsStyle={type} dismissAfter={3000} onDismiss={this.handleAlertDismiss.bind(this)}>
            <h4>{title}</h4>
            <p>{message}</p>
          </Alert>
        }

        <div className="pull-right">
          <button onClick={()=> this.setState({showForm: !this.state.showForm})} className="btn btn-primary">Create a Trip</button>
        </div>
          {this.state.showForm && 
            <TripPostFormWidget 
              onSubmit={this.handleSubmit.bind(this)} 
              resetForm={this.handleResetForm.bind(this)} 
              submitting={this.props.isFormSubmitting}
              data={this.props.trip} /> 
          }

          <br/>
        <h3>Trip List</h3>
        <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Id</th>
                <th>Name & Link</th>
                <th>Destination</th>
               <th>Description</th>
               <th>Action</th>
              </tr>
            </thead>
            <tbody> 
              {this.props.trips.map((trip, key) => {
                return  (
                 <tr key={key}>
                  <td>{key+1}</td>
                  <td><Link to={`admin/trip/${trip.id}`}>{trip.id}</Link></td>
                  <td>{trip.destination}</td>
                  <td>{trip.title}</td>
                  <td>{trip.summary}</td>
                  <td>  
                    <a onClick={this.handleDelete.bind(this, trip.id)}><span aria-hidden="true" className="glyphicon glyphicon-remove" ></span></a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to={`admin/trip/${trip.id}/edit`}><span aria-hidden="true" className="glyphicon glyphicon-pencil" ></span></Link>
                  </td>
                </tr>
                )
              })} 
            </tbody>
          </Table>

      </div>
    )
  }
}
AdminTripList.propTypes = {
  trips: PropTypes.object
}

AdminTripList.displayName = 'AdminTripList Page'
