import React, {
  Component, PropTypes
}
from 'react'

import {
  TrippianPostFormWidget
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
  getAdminTrippians, deleteAdminTrippianById

}
from '../../redux/apiAdminIndex'
import {
  postTrippian
}
from '../../redux/apiIndex'

function mapStateToProps(state) {
  return {
    trippians: state.apiAdmin.get('adminTrippians')
  }
}

@
connect(mapStateToProps)
export default class AdminTrippianList extends Component {
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
    store.dispatch(getAdminTrippians())
  }

  handleDelete(id) {
    console.log('deleting trippian called', id)
    store.dispatch(deleteAdminTrippianById(id))
    this.setAlert('success', 'Successfully deleted trippian. Id:', id)

  }
  handleSubmit(data) {
    console.log('posting data from form', data)
    store.dispatch(postTrippian(data))
    this.setAlert('success', 'Successfully submitted data', data)
  }
  handleAlertDismiss() {
    this.setAlert()
  }
  setAlert(type = 'success', title = '', message = '') {
    this.setState({
      showForm: false,
      alert: {
        type: type,
        title: title,
        message: message
      }
    })
  }
  render() {
    console.log('rendering admint', this.props.trippians)
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
          <button onClick={()=> this.setState({showForm: !this.state.showForm})} className="btn btn-primary">Create a Trippian</button>
        </div>
          {this.state.showForm && 
            <TrippianPostFormWidget onSubmit={this.handleSubmit.bind(this)} /> 
          }

          <br/>
        <h3>Trippian List</h3>
        <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Id</th>
               <th>isTrippian?</th>
                <th>Name & Link</th>
               <th>facebookId</th>
               <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {
  this.props.trippians.map((trippian, key) => {
    return (
      <tr key={key}>
                <td>{key+1}</td>
                <td>{trippian.id}</td>
                <td>{trippian.trippian ? 'Yes' : null}</td>
                <td><Link to={`admin/trippian/${trippian.id}`}>{trippian.name}</Link></td>
                <td>{trippian.facebookId}</td>
                <td>  
                  <a onClick={this.handleDelete.bind(this, trippian.id)}><span aria-hidden="true" className="glyphicon glyphicon-remove" ></span></a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to="admin/trippian/58/edit"><span aria-hidden="true" className="glyphicon glyphicon-pencil" ></span></Link>
                </td>
              </tr>
    )
  })
}

            </tbody>
          </Table>

      </div>
    )
  }
}
AdminTrippianList.propTypes = {
  trippians: PropTypes.object
}

AdminTrippianList.displayName = 'AdminTrippianList Page'
