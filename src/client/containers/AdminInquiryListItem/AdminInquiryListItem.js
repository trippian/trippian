import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}
from '../../components/index'
import store from '../../redux/store'
import {
  connect
}
from 'react-redux'
import {
  getAdminInquiryById
}
from '../../redux/apiAdminIndex'

function mapStateToProps(state) {
  return {
    inquiry: state.apiAdmin.get('currentInquiry')
  }
}

@
connect(mapStateToProps)
export default class AdminInquiryListItem extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const id = this.props.params.id
    console.log('will get destination by id', id)
    store.dispatch(getAdminInquiryById(id))
  }

  render() {
    console.log('***insider render', this.props.inquiry)
    const {
      createdAt, senderId, receiverId, endDate, sender, subject, mobile, content, trippianId, startDate, email, personCount
    } = this.props.inquiry.properties
    return (
      <div id="admin-destination-list-item-page">
        <h3> {name}</h3>
        <p><b>createdAt:</b> {createdAt}</p>
        <p><b>personCount:</b> {personCount}</p>
        <p><b>senderId:</b> {senderId}</p>
        <p><b>receiverId:</b> {receiverId}</p>
        <p><b>startDate:</b> {startDate}</p>
        <p><b>endDate:</b> {endDate}</p>
        <p><b>mobile:</b> {mobile}</p>
        <p><b>subject:</b> {subject}</p>
        <p><b>content:</b> {content}</p>
   
      </div>
    )
  }
}
AdminInquiryListItem.propTypes = {
  // name: PropTypes.string
}

AdminInquiryListItem.displayName = 'AdminInquiryListItem Page'
