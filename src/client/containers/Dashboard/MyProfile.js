import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronTrippianWidget, InquiryListWidget, ReviewListWidget, TextIntroPlainWidget, TextIntroRichWidget, TripPostFormWidget, DummyRichTextWidget,
  UserProfileWidget, TrippianProfileWidget
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
  postTrip
}
from '../../redux/apiIndex'

function mapStateToProps(state) {
  return {
    // get the data directly from store as we already fetched in the Dashboard container
    dashboard: state.apiTrippian.get('dashboard')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    postTrip: bindActionCreators(postTrip, dispatch)
  }
}

@
connect(mapStateToProps, mapDispatchToProps)
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
    const {
      trippian
    } = this.props.dashboard
    console.log('inside my profile render', this.props.dashboard)
    return (
      <div className="my-profile-page">
        {!trippian &&  <UserProfileWidget {...this.props.dashboard} /> }
        {trippian && <TrippianProfileWidget {...this.props.dashboard} /> }
      </div >

    )
  }
}
TrippianEdit.propTypes = {
  name: PropTypes.string
}

TrippianEdit.displayName = 'TrippianEdit Page'
