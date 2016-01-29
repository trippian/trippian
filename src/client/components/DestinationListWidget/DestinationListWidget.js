import React from 'react'
import {
  DestinationListItemWidget
}
from '../index'

const DestinationListWidget = ({
  dataList = []
}) => {
  console.log('inside Destination list', dataList, dataList.length)
  return (
    <div className="popular-destinations section-body clearfix">
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
