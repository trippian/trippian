import log from '../../log'
import React from 'react'
import {
  NoContentWidget as appConfig
}
from '../../config/appConfig'

const NoContentWidget = ({
  name = 'NoContentWidget', message = appConfig.noContentMessage
}) => {
  return (
    <div> 
        <h3>{message}</h3>
    </div>
  )
}
NoContentWidget.displayName = 'NoContentWidget'

export default NoContentWidget
