import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronDashboardWidget, InquiryListWidget, ReviewListWidget, TextIntroPlainWidget, TextIntroRichWidget, TripPostFormWidget, DummyRichTextWidget
}
from '../../components/index'
import {
  Alert
}
from 'react-bootstrap'
import {
  postTrip
}
from '../../redux/apiIndex'
import store from '../../redux/store'
export default class UserWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowTripForm: true,
      alert: {
        type: 'success',
        title: 'Operation Performed',
        message: 'Some action has performed....'
      }
    }
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
    const {
      type, title, message
    } = this.state.alert
    return (
      <div id="user-wrapper-page">
        <JumbotronDashboardWidget title='Edit Profile' isTitled />
        <div className="container main-content-container">
            <div className="col-sm-12 col-md-12 content-container">
                {title !== '' && 
                  <Alert bsStyle={type} dismissAfter={3000} onDismiss={this.handleAlertDismiss.bind(this)}>
                    <h4>{title}</h4>
                    <p>{message}</p>
                  </Alert>
                }
                {this.props.children}
            </div>
        </div>
      </div>
    )
  }
}
UserWrapper.propTypes = {
  name: PropTypes.string
}

UserWrapper.displayName = 'UserWrapper Page'
