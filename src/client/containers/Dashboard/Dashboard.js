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
  bindActionCreators
}
from 'redux'
import {
  connect
}
from 'react-redux'


import {
  postTrip, getDashboardById
}
from '../../redux/apiIndex'
import {
  setAlert
}
from '../../redux/actionCreators'


function mapStateToProps(state) {
  return {
    alert: state.appState.get('alert')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setAlert: bindActionCreators(setAlert, dispatch),
    getDashboardById: bindActionCreators(getDashboardById, dispatch)
  }
}
@
connect(mapStateToProps, mapDispatchToProps)
export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowTripForm: true
    }
  }
  componentDidMount() {
    this.props.getDashboardById()
  }

  handleAlertDismiss() {
    this.props.setAlert() // empty parameter will reset the alert to original state}
  }

  render() {
    const {
      type, title, message
    } = this.props.alert
    return (
      <div id="user-wrapper-page">
        <JumbotronDashboardWidget />
        <div className="container main-content-container">
            <div className="col-sm-12 col-md-10 col-md-offset-1 content-container">
                {title !== '' && 
                  <Alert bsStyle={type} dismissAfter={8000} onDismiss={this.handleAlertDismiss.bind(this)}>
                    <h4>{title}</h4>
                    {message &&  <p>{message}</p>}
                  </Alert>
                }
                {this.props.children}
            </div>
        </div>
      </div>
    )
  }
}
Dashboard.propTypes = {
  alert: PropTypes.object,
  name: PropTypes.string
}

Dashboard.displayName = 'Dashboard Page'
