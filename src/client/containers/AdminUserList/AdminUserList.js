import React, {
  Component, PropTypes
}
from 'react'

import {
  UserPostFormWidget
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
  getAdminUsers, deleteAdminUserById

}
from '../../redux/apiAdminIndex'


function mapStateToProps(state) {
  return {
    users: state.apiAdmin.get('adminUsers')
  }
}

@
connect(mapStateToProps)
export default class AdminUserList extends Component {
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
    store.dispatch(getAdminUsers())
  }

  handleSubmit(data) {
    console.log('posting data from form', data)
      // store.dispatch(postDestination(data))
    this.setAlert('success', 'Successfully submitted data', `${data.name} ${data.description}`)
  }

  handleDelete(id) {
    console.log('deleting user called', id)
    store.dispatch(deleteAdminUserById(id))
    this.setAlert('success', 'Successfully deleted trippian. Id:', id)

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
    console.log('rendering admin user', this.props.users)
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
            <button onClick={()=> this.setState({showForm: !this.state.showForm})} className="btn btn-primary">Create a User</button>
          </div>
            {this.state.showForm && 
              <UserPostFormWidget onSubmit={this.handleSubmit.bind(this)} /> 
            }
      <br/>

        <h3>Trippian List</h3>
        <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>id</th>
                <th>Name & Link</th>
               <th>Description</th>
               <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {this.props.users.map((user, key) => {
              return  (
               <tr key={key}>
                <td>{key+1}</td>
                <td>{user.id}</td>
                <td><Link to={`admin/user/${user.id}`}>{user.name}</Link></td>
                <td>{user.name}</td>
                <td>  
                  <a onClick={this.handleDelete.bind(this, user.id)}><span aria-hidden="true" className="glyphicon glyphicon-remove" ></span></a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to="admin/user/58/edit"><span aria-hidden="true" className="glyphicon glyphicon-pencil" ></span></Link>
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
AdminUserList.propTypes = {
  users: PropTypes.object
}

AdminUserList.displayName = 'AdminUserList Page'
