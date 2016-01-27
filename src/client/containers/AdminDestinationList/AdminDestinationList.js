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
  getAdminDestinations, deleteAdminDestinationById
}
from '../../redux/apiAdminIndex'


function mapStateToProps(state) {
  return {
    destinations: state.apiAdmin.get('adminDestinations'),
    trippians: state.apiAdmin.get('adminTrippians')
  }
}

@
connect(mapStateToProps)
export default class AdminDestinationList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alert: {
        type: 'danger',
        title: '',
        message: ''
      }
    }
  }

  componentDidMount() {
    // store.dispatch(getAdminTrippians())
    store.dispatch(getAdminDestinations())
  }
  handleDelete(id) {
    console.log('deleting destination called', id)
    store.dispatch(deleteAdminDestinationById(id))
    this.setAlert('success', 'Successfully deleted data', id)

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
    // data format 
    // destinationImage: "http://lorempixel.com/400/200/",
    // destinationDescription: "a cool city",
    // destinationName: "Paris, France",
    // whyVisit: "there is a lot of historical sites",
    // id: 62
    // => TODO: create table row widget 
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
          <Link className="btn btn-primary" to='destination-post'>Create a Destination</Link>
        </div>
          <br/>
        <h3>Destination List</h3>
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
            {this.props.destinations.map((destination, key) => {
              return  (
               <tr key={key}>
                <td>{key+1}</td>
                <td><Link to={`admin/destination/${destination.id}`}>{destination.destinationName}</Link></td>
                <td>{destination.destinationDescription}</td>
                <td>  
                  <a onClick={this.handleDelete.bind(this, destination.id)}><span aria-hidden="true" className="glyphicon glyphicon-remove" ></span></a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to="admin/destination/58/edit"><span aria-hidden="true" className="glyphicon glyphicon-pencil" ></span></Link>
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
AdminDestinationList.propTypes = {
  // destinations: PropTypes.object,
  // trippians: PropTypes.object


}

AdminDestinationList.displayName = 'AdminDestinationList Page'
