import React from 'react'
import {
  TrippianListItemRoundWidget, NoContentWidget
}
from '../index'

const TrippianListRoundWidget = ({
  dataList = [], emptyMessage = 'There is no Trippian'
}) => {
  console.log('inside trippian list', dataList, dataList.length)
  return (
    <div className="popular-trippians section-body clearfix">
    {dataList.length === 0 && 
        <NoContentWidget message={emptyMessage} />
    }
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
