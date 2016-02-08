import log from '../../log'
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
    inquiry: state.apiTrippian.get('inquiry'),
    isFormSubmitted: state.appState.get('isFormSubmitted'),
    isFormSubmitting: state.appState.get('isFormSubmitting')
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
  componentWillReceiveProps(nextProps) {
    console.log('new props', nextProps, nextProps.isFormSubmitted, nextProps.isFormSubmitting)
      // Audrey: have a little trouble at with google auth error at server side, and never able to receive isFormSubmitted state. Could be env related 
      // For now, we know the data is inserted to db, so we'll transition to the new state as if the isFormSubmitted is true  
    if (nextProps.isFormSubmitting) {
      const {
        history
      } = nextProps
      history.pushState({
        state: 'dashboard'
      }, 'dashboard/my-inquiries')
    }
  }
  handleAlertDismiss() {
    this.setAlert()
  }

  handleSubmit(data) {
      log.info('posting data from form', data)
      store.dispatch(postInquiry(data))
    }
    //TODO: add loading during submiting 
  render() {
    const {
      type, title, message
    } = this.state.alert
    console.log('-- inside contact', this.props.isFormSubmitted, this.props.isFormSubmitting)
    return (
      <div>
        <h2>Hello Contact </h2>
        {!this.props.isFormSubmitted && <InquiryPostFormWidget onSubmit={this.handleSubmit.bind(this)} /> }
        {this.props.isFormSubmitting && <h3> Submitting the form now </h3>}
        {this.props.isFormSubmitted && <h2>Submitted form. Check dashboard now</h2>}
      </div>
    )
  }
}
Contact.propTypes = {
  // name: PropTypes.string
}

Contact.displayName = 'Contact Page'
