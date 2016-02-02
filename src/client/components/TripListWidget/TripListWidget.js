import React from 'react'
import {
  TripListItemWidget
}
from '../index'

const TripListWidget = ({
  dataList = []
}) => {
  console.log('inside Trip list', dataList, dataList.length)
  return (
    <div className="popular-Trips section-body clearfix">
    { 
       dataList.map((trip, key) => (
         <TripListItemWidget key={key} {...trip} />
      ))
   }
    </div>
  )
}
TripListWidget.displayName = 'TripListWidget'

export default TripListWidget
