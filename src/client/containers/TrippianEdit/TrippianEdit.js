import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronTrippianWidget, InquiryListWidget, ReviewListWidget, TextIntroPlainWidget, TextIntroRichWidget, TripPostFormWidget, DummyRichTextWidget
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
export default class TrippianEdit extends Component {
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

  handleSubmit(data) {
    console.log('--- submitting the inquiry now', data)
    store.dispatch(postTrip(data))
    this.setAlert('success', 'Successfully deleted trip. Id:', id)
  }
  render() {
    const {
      type, title, message
    } = this.state.alert
    return (
      <div id="trippian-edit-page">
        <JumbotronTrippianWidget title='Edit Profile' isNoContact isTitled />
        <div className="container main-content-container">
            
            <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
                {title !== '' && 
                  <Alert bsStyle={type} dismissAfter={3000} onDismiss={this.handleAlertDismiss.bind(this)}>
                    <h4>{title}</h4>
                    <p>{message}</p>
                  </Alert>
                }

                <button type="button" onClick={()=> this.setState({isShowTripForm: !this.state.isShowTripForm})} className="btn btn-primary btn-lg pull-right">Create a Trip</button>
                {
                  this.state.isShowTripForm && <TripPostFormWidget onSubmit={this.handleSubmit.bind(this)} />
                }
                <div className="section inquiries">
                    <div className="section-header">
                        <h3>My Inquiries</h3>
                    </div>
                    <div className="section-body">
                      <InquiryListWidget />
                    </div>
                </div>

                <div className="section">
                    <div className="section-header">
                        <h3>Bio</h3>
                        <TextIntroPlainWidget />
                    </div>
                </div>
                <div className="section">
                    <div className="section-header">
                        <h3>My Trips</h3>
                    </div>
                    <div className="section-body">
                      <DummyRichTextWidget />
                    </div>
                </div>
                <div className="section review">
                    <div className="section-header">
                        <h3>Reviews</h3>
                    </div>
                    <ReviewListWidget />
                </div>
            </div>
        </div>
      </div>
    )
  }
}
TrippianEdit.propTypes = {
  name: PropTypes.string
}

TrippianEdit.displayName = 'TrippianEdit Page'
