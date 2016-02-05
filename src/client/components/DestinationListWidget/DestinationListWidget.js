import React from 'react'
import {
  DestinationListItemWidget, NoContentWidget
}
from '../index'

const DestinationListWidget = ({
  dataList = [], emptyMessage = 'There is no destination'
}) => {
  console.log('inside Destination list', dataList, dataList.length)
  return (
    <div className="popular-destinations section-body clearfix">
    {dataList.length === 0 && 
      <NoContentWidget message={emptyMessage} />
    }
    { 
       dataList.map((destination, key) => (
         <DestinationListItemWidget key={key} {...destination} />
      ))
   }
    </div>
  )
}
DestinationListWidget.displayName = 'DestinationListWidget'

export default DestinationListWidget
