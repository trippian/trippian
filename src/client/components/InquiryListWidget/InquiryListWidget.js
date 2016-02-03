import React from 'react'

import {
  InquiryListItemWidget
}
from '../index'

const InquiryListWidget = ({
  name = 'InquiryListWidget', dataList = []
}) => {
  return (
    <div className="section-body inquiry-list">
        <ul className="list-group">

          <InquiryListItemWidget />
          <InquiryListItemWidget isExpanded />
          <InquiryListItemWidget />
          <InquiryListItemWidget />
          <InquiryListItemWidget />
        </ul>
    </div>
  )
}
InquiryListWidget.displayName = 'InquiryListWidget'

export default InquiryListWidget
