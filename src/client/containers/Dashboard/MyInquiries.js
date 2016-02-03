import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronTrippianWidget, InquiryListWidget, ReviewListWidget, TextIntroPlainWidget, TextIntroRichWidget, TripPostFormWidget, DummyRichTextWidget,
  UserinquiryWidget, TrippianProfileWidget
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

function mapStateToProps(state) {
  return {
    // get the data directly from store as we already fetched in the Dashboard container
    dashboard: state.apiTrippian.get('dashboard')
  }
}

@
connect(mapStateToProps)
export default class MyInquiries extends Component {
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
      inquiries
    } = this.props.dashboard
    console.log('inside MyInquiries render', inquiries)
    return (
      <div className="my-inquiries-page">
        <h2>Inquiries</h2>

      </div >

    )
  }
}

// {inquiries.length > 0  && 
//   <InquiryListWidget dataList=inquiries/>
// }
// {
//   inquiries.length === 0 &&  <h2>There is no inquiry</h2>
// }
MyInquiries.propTypes = {
  name: PropTypes.string
}

MyInquiries.displayName = 'MyInquiries Page'
