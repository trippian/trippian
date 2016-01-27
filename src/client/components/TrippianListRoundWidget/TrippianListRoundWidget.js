import React from 'react'
import {
  TrippianListItemRoundWidget
}
from '../index'

const TrippianListRoundWidget = ({
  dataList = []
}) => {
  console.log('inside trippian list', dataList, dataList.length)
  return (
    <div className="popular-trippians section-body clearfix">
    { 
       dataList.map((trippian, key) => (
         <TrippianListItemRoundWidget key={key} {...trippian} />
      ))
   }
    </div>
  )
}
TrippianListRoundWidget.displayName = 'TrippianListRoundWidget'

export default TrippianListRoundWidget
