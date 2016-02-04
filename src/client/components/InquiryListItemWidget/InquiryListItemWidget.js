import React, {
  Component
}
from 'react'
import {
  Col
}
from 'react-bootstrap'
import * as data from '../../redux/initalState'
import {
  Link
}
from 'react-router'
import {
  deleteInquiryById
}
from '../../redux/apiIndex'

import store from '../../redux/store'

// TODO: add Trippian Name, find link icon for trippian
export default class InquiryListItemWidget extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleDelete() {
    console.log('deleting inquiry called', this.props.id)
    store.dispatch(deleteInquiryById(this.props.id))
  }
  handleAccept() {
    console.log('accept inquiry called', this.props.id)
  }
  handleReject() {
    console.log('reject inquiry called', this.props.id)
  }

  render() {
    const {
      createdAt, senderId, receiverId, personCount, startDate, endDate, email, mobile, subject, content, accepted
    } = this.props.properties
    return (
      <div className="inquiry-list-item-widget">
          <h4>{subject}{this.props.id}</h4>
          <div className="row cleafix">
            <Col xs={12} md={8} >
              <p><span>
                  Start:  {startDate} End: {endDate}  &nbsp;
                  <i className="fa fa-user"></i>: {personCount}  Person
                </span>
              </p>
              <p> 
                <i className="fa fa-email"></i><a href={`mailto:${email}`}>{email}</a>
                <i className="fa fa-phone"></i>: {mobile}
                <i className="fa fa-external-link"></i> <Link to={`trippian/${receiverId}`}>Trippian</Link>
              </p>
              <p>content {content}</p>
              <p>accepted {accepted}</p>
            </Col>
            <Col xs={12} md={4} >
              <button onClick={this.handleDelete.bind(this)} className="icon-right pull-right" title="accept"> <i className="fa fa-trash"></i></button> 
              <button onClick={this.handleAccept.bind(this)} className = "icon-right pull-right" title = "refuse" > <i className="fa fa-check"></i> < /button> 
              <button onClick={this.handleReject.bind(this)} className = "icon-right pull-right" title = "delete" > <i className="fa fa-close"></i> < /button>
            </Col>
          </div>
        
      </div>
    )
  }

}
InquiryListItemWidget.displayName = 'InquiryListItemWidget'

export default InquiryListItemWidget
