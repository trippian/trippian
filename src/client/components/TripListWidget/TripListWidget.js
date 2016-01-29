import React from 'react'
import {
  TripListItemWidget
}
from '../index'

const TripListWidget = ({
  tripList = []
}) => {
  console.log('inside Destination list', tripList, tripList.length)
  return (
    <div className="popular-destinations section-body clearfix">
    { 
        tripList.map((trip, key) => (
         <TripListItemWidget key={key} {...trip} />
      ))
   }
    </div>
  )
}
TripListWidget.displayName = 'TripListWidget'

export default TripListWidget