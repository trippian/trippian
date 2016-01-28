import React, {
  Component, PropTypes
}
from 'react'

import {
  InquiryPostFormWidget
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
  getAdminInquiries, deleteAdminInquiryById
}
from '../../redux/apiAdminIndex'


function mapStateToProps(state) {
  return {
    inquiries: state.apiAdmin.get('adminInquiries')
  }
}

@
connect(mapStateToProps)
export default class AdminInquiryList extends Component {
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
    store.dispatch(getAdminInquiries())
  }

  componentWillReceiveProps(newProps) {
    console.log('inside  will receive props', newProps)

  }
  handleDelete(id) {
    console.log('deleting inquiry called', id)
    store.dispatch(deleteAdminInquiryById(id))
    this.setAlert('success', 'Successfully deleted data', id)

  }
  handleAlertDismiss() {
    this.setAlert()
  }
  handleSubmit(data) {
    console.log('posting data from form', data)
      // store.dispatch(postDestination(data))
    this.setAlert('success', 'Successfully submitted data', `${data.name} ${data.description}`)
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
    console.log('inside render', this.props.inquiries)
    const {
      type, title, message
    } = this.state.alert
    return (
      <div id="admin-inquiry-page">
        {title !== '' && 
          <Alert bsStyle={type} dismissAfter={3000} onDismiss={this.handleAlertDismiss.bind(this)}>
            <h4>{title}</h4>
            <p>{message}</p>
          </Alert>
        }

        <div className="pull-right">
          <button onClick={()=> this.setState({showForm: !this.state.showForm})} className="btn btn-primary">Create a Inquiry</button>
        </div>

          {this.state.showForm && 
            <InquiryPostFormWidget onSubmit={this.handleSubmit.bind(this)} /> 
          }

          <br/>
        <h3>Inquiry List</h3>
        <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Id</th>
                <th>Sender</th>
                <th>Receiver</th>
               <th>Subject</th>
               <th>Content</th>
               <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {this.props.inquiries.map((inquiry, key) => {
              return  (
               <tr key={key}>
                <td>{key+1}</td>
                <td><Link to={`admin/inquiry/${inquiry.id}`}>{inquiry.id}</Link></td>
                <td>{inquiry.start}</td>
                <td>{inquiry.end}</td>
                <td>{inquiry.properties.subject}</td>
                <td>{inquiry.properties.content}</td>
                <td>  
                  <a onClick={this.handleDelete.bind(this, inquiry.id)}><span aria-hidden="true" className="glyphicon glyphicon-remove" ></span></a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to="admin/inquiry/58/edit"><span aria-hidden="true" className="glyphicon glyphicon-pencil" ></span></Link>
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
AdminInquiryList.propTypes = {
  inquiries: PropTypes.object
}

AdminInquiryList.displayName = 'AdminInquiryList Page'
