import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
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


function mapStateToProps(state) {
  return {
    trips: state.apiAdmin.get('adminTrips')
  }
}

@
connect(mapStateToProps)
export default class AdminTripList extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
    console.log('deleting trip called', id)
    store.dispatch(deleteAdminTripById(id))
    this.setAlert('success', 'Successfully deleted trip. Id:', id)

  }
  handleAlertDismiss() {
    this.setAlert()
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
    console.log('rendering trips', this.props.trips)
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
          <Link className="btn btn-primary" to='/'>Create a User(disabled)</Link>
        </div>
          <br/>
        <h3>Trip List</h3>
        <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name & Link</th>
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
                  <td>{trip.title}</td>
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
