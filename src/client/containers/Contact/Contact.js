import React, {
  Component, PropTypes
}
from 'react'
import store from '../../redux/store'
import {
  postInquiry
}
from '../../redux/apiIndex'
import {
  Alert
}
from 'react-bootstrap'
import {
  connect
}
from 'react-redux'
import {
  InquiryPostFormWidget
}
from '../../components/index'

function mapStateToProps(state) {
  return {
    inquiry: state.apiTrippian.get('inquiry')
  }
}

@
connect(mapStateToProps)
export default class Contact extends Component {
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

  handleAlertDismiss() {
    this.setAlert()
  }

  handleSubmit(data) {
    console.log('posting data from form', data)
    store.dispatch(postInquiry(data))
      // this.setAlert('success', 'Successfully submitted inquiry')
  }
  setAlert(type = 'success', title = '', message = '') {
    this.setState({
      isInquirySubmitted: false,
      alert: {
        type: type,
        title: title,
        message: message
      }
    })
  }
  render() {
    const {
      type, title, message
    } = this.state.alert

    return (
      <div>
        {title !== '' && 
          <Alert bsStyle={type} dismissAfter={5000} onDismiss={this.handleAlertDismiss.bind(this)}>
            <h4>{title}</h4>
            <p>{message}</p>
          </Alert>
        }
        {! this.state.isInquirySubmitted && <InquiryPostFormWidget onSubmit={this.handleSubmit.bind(this)} /> }
      </div>
    )
  }
}
Contact.propTypes = {
  // name: PropTypes.string
}

Contact.displayName = 'Contact Page'
