import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget, DestinationPostFormWidget, DropFileWidget, AutoSuggestBoxWidget
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

import {
  postDestination
}
from '../../redux/apiIndex'
import {
  AdminDestinationList as appConfig
}
from '../../config/appConfig'

function mapStateToProps(state) {
  return {
    destinations: state.apiAdmin.get('adminDestinations'),
    destination: state.apiTrippian.get('destination'),
    trippians: state.apiAdmin.get('adminTrippians'),
    isFormSubmitting: state.appState.get('isFormSubmitting'),
    isFormSubmitted: state.appState.get('isFormSubmitted')
  }
}

@
connect(mapStateToProps)
export default class AdminDestinationList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
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
    log.info('deleting destination called', id)
    store.dispatch(deleteAdminDestinationById(id))
  }
  handleAlertDismiss() {
    this.setAlert()
  }


  handleSubmit(data) {
    log.info('posting data from form, submitting?', data, this.props.isFormSubmitted, this.props.isFormSubmitting)
    store.dispatch(postDestination(data))
  }

  handleResetForm() {

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
          <button onClick={()=> this.setState({showForm: !this.state.showForm})} className="btn btn-primary">Create a Destination</button>
        </div>
          {this.state.showForm && 
              <DestinationPostFormWidget 
                onSubmit={this.handleSubmit.bind(this)} 
                resetForm={this.handleResetForm.bind(this)} 
                submitting={this.props.isFormSubmitting}
                data={this.props.destination} /> 
          }

          <br/>
        <h3>{appConfig.containerTitle}</h3>
        <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Id</th>
                <th>Name & Link</th>
               <th>Description</th>
               <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {this.props.destinations.sort((d1, d2)=> d1.id < d2.id).map((destination, key) => {
              const {id, name, description} = destination 
              return  (
               <tr key={key}>
                <td>{key+1}</td>
                <td>{id}</td>
                <td><Link to={`admin/destination/${id}`}>{name}</Link></td>
                <td>{description}</td>
                <td>  
                  <a onClick={this.handleDelete.bind(this, id)}><span aria-hidden="true" className="glyphicon glyphicon-remove" ></span></a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to={`admin/destination/${id}/edit`}><span aria-hidden="true" className="glyphicon glyphicon-pencil" ></span></Link>
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
  destinations: PropTypes.object
}

AdminDestinationList.displayName = 'AdminDestinationList Page'
