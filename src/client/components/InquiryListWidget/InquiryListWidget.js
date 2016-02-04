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
      { dataList.map((inquiry, key) => (
               <InquiryListItemWidget key={key} {...inquiry} />
            ))
      }
    </div>
  )
}
InquiryListWidget.displayName = 'InquiryListWidget'

export default InquiryListWidget
