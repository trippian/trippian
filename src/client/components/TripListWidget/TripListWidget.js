import React from 'react'
import {
  TripListItemWidget, NoContentWidget
}
from '../index'
import {
  TripListWidget as appConfig
}
from '../../config/appConfig'

const TripListWidget = ({
  dataList = [], noContentMessage = appConfig.noContentMessage
}) => {
  console.log('inside Trip list', dataList, dataList.length)
  return (
    <div className="popular-Trips section-body clearfix">
      {dataList.length === 0 && 
        <NoContentWidget message={noContentMessage} />
      }
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
