import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}
from '../../components/index'
import {
  Table
}
from 'react-bootstrap'
import {
  Link
}
from 'react-router'
import {
  bindActionCreators
}
from 'redux'
import {
  connect
}
from 'react-redux'
import store from '../../redux/store'
import {
  getAdminDestinations, getAdminTrippians, deleteAdminDestinationById
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
  }

  componentDidMount() {
    store.dispatch(getAdminTrippians())
    store.dispatch(getAdminDestinations())
  }
  handleDelete(id) {
    console.log('deleting destination called', id)
    store.dispatch(deleteAdminDestinationById(id))
  }

  render() {
    // data format 
    // destinationImage: "http://lorempixel.com/400/200/",
    // destinationDescription: "a cool city",
    // destinationName: "Paris, France",
    // whyVisit: "there is a lot of historical sites",
    // id: 62
    // => TODO: create table row widget 
    return (
      <div id="admin-destination-page">
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
