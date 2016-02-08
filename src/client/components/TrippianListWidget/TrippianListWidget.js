import log from '../../log'
import React from 'react'
import {
  TrippianListItemWidget, NoContentWidget
}
from '../index'
import {
  TrippianListWidget as appConfig
}
from '../../config/appConfig'

const TrippianListWidget = ({
  dataList = [], noContentMessage = appConfig.noContentMessage
}) => {
  log.info('inside', dataList)
  return (
    <div className="popular-trippians section-body clearfix">
        {dataList.length === 0 && 
                <NoContentWidget message={noContentMessage} />
        }
        {
          dataList.map((trippian, key) => (
            <TrippianListItemWidget key={key} {...trippian} />
            ))
        }
      </div>
  )
}

TrippianListWidget.displayName = 'TrippianListWidget'

export default TrippianListWidget
