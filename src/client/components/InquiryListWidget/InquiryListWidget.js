import log from '../../log'
import React from 'react'

import {
  InquiryListItemWidget, NoContentWidget
}
from '../index'


const InquiryListWidget = ({
  name = 'InquiryListWidget', dataList = [], noContentMessage = 'There is no inquiry'
}) => {
  return (
    <div className="section-body inquiry-list">
      {dataList.length === 0 && 
        <NoContentWidget message={noContentMessage} />
      }
      { dataList.map((inquiry, key) => (
               <InquiryListItemWidget key={key} {...inquiry} />
            ))
      }
    </div>
  )
}
InquiryListWidget.displayName = 'InquiryListWidget'

export default InquiryListWidget
