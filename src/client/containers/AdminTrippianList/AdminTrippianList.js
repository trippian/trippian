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
  getAdminTrippians, deleteAdminTrippianById

}
from '../../redux/apiAdminIndex'


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
          <Link className="btn btn-primary" to='become-a-trippian'>Create a Trippian</Link>
        </div>
          <br/>
        <h3>Trippian List</h3>
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
            {this.props.trippians.map((trippian, key) => {
              return  (
               <tr key={key}>
                <td>{key+1}</td>
                <td><Link to={`admin/trippian/${trippian.id}`}>{trippian.name}</Link></td>
                <td>{trippian.name}</td>
                <td>  
                  <a onClick={this.handleDelete.bind(this, trippian.id)}><span aria-hidden="true" className="glyphicon glyphicon-remove" ></span></a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to="admin/trippian/58/edit"><span aria-hidden="true" className="glyphicon glyphicon-pencil" ></span></Link>
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
AdminTrippianList.propTypes = {
  trippians: PropTypes.object
}

AdminTrippianList.displayName = 'AdminTrippianList Page'
