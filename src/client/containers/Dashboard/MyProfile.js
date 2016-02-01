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
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import {
  postTrip
}
from '../../redux/apiIndex'

function mapStateToProps(state){
  return {user: state.appState.get('username') }
}
function mapDispatchToProps(dispatch) {
  return {postTrip:bindActionCreators(postTrip, dispatch) }
}
@connect(mapStateToProps, mapDispatchToProps)
export default class TrippianEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowTripForm: true
    }
  }

  handleSubmit(data) {
    console.log('--- submitting the inquiry now', data)
    this.props.postTrip(data)
  }
  render() {
    return (
      <div className="my-profile-page">
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

    )
  }
}
TrippianEdit.propTypes = {
  name: PropTypes.string
}

TrippianEdit.displayName = 'TrippianEdit Page'
