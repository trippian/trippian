import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'

import {
  InquiryPostFormWidget, AdminInquiryDetailWidget
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
  bindActionCreators
}
from 'redux'
import {
  connect
}
from 'react-redux'
import store from '../../redux/store'
import {
  getAdminInquiries, deleteAdminInquiryById
}
from '../../redux/apiAdminIndex'
import {
  postInquiry
}
from '../../redux/apiIndex'
import {
  setAdminCurrentInquiry
}
from '../../redux/actionCreators'

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
      },
      currentInquiry: {
        start: 0,
        end: 1,
        properties: {
          createdAt: '',
          senderId: 0,
          receiverId: 0,
          personCount: 5,
          startDate: '2015-02-14',
          endDate: '2015-02-28',
          mobile: '',
          email: '',
          subject: 'hi',
          content: '',
          accepted: false
        }
      }

    }
  }

  componentDidMount() {
    store.dispatch(getAdminInquiries())
  }

  componentWillReceiveProps(newProps) {
    log.info('inside  will receive props', newProps)

  }
  handleDelete(id) {
    log.info('deleting inquiry called', id)
    store.dispatch(deleteAdminInquiryById(id))
    this.setAlert('success', 'Successfully deleted data', id)

  }
  handleShow(index) {
    this.setState({
      currentInquiry: this.props.inquiries[index]
    })
    log.info('show current inquiry called', index, 'before', this.props.inquiries[index])
  }

  handleAlertDismiss() {
    this.setAlert()
  }

  handleSubmit(data) {
    log.info('posting data from form', data)
    store.dispatch(postInquiry(data))
    this.setAlert('success', 'Successfully submitted data')
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
    log.info('inside render', this.props.inquiries)
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
                <th>Sender -> Receiver</th>
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
                <td>{inquiry.id}</td>
                <td>{inquiry.start} -> {inquiry.end}</td>
                <td>{inquiry.properties.subject}</td>
                <td>{inquiry.properties.content}</td>
                <td>  
                   <button onClick={this.handleShow.bind(this, key)}>show</button>

                  <a onClick={this.handleDelete.bind(this, inquiry.id)}><span aria-hidden="true" className="glyphicon glyphicon-remove" ></span></a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to="admin/inquiry/58/edit"><span aria-hidden="true" className="glyphicon glyphicon-pencil" ></span></Link>
                </td>
              </tr>
              )
              // return  (
              //  <tr key={key}>
              //   <td>{key+1}</td>
              //   <td>{inquiry.id}</td>
              //   <td>{inquiry.start}</td>
              //   <td><Link to={`admin/inquiry/${inquiry.properties.trippianId}`}>{inquiry.properties.trippianId}</Link></td>
              //   <td>{inquiry.properties.subject}</td>
              //   <td>{inquiry.properties.content}</td>
              //   <td>  
              //     <a onClick={this.handleDelete.bind(this, inquiry.id)}><span aria-hidden="true" className="glyphicon glyphicon-remove" ></span></a>
              //     &nbsp;&nbsp;&nbsp;&nbsp;
              //     <Link to="admin/inquiry/58/edit"><span aria-hidden="true" className="glyphicon glyphicon-pencil" ></span></Link>
              //   </td>
              // </tr>
              // )
            })} 
            </tbody>
          </Table>
          <AdminInquiryDetailWidget {...this.state.currentInquiry.properties} />
      </div>
    )
  }
}



AdminInquiryList.propTypes = {
  currentInquiry: PropTypes.object,
  inquiries: PropTypes.object
    // setAdminCurrentInquiry: PropTypes.func.isRequired
}

AdminInquiryList.displayName = 'AdminInquiryList Page'
