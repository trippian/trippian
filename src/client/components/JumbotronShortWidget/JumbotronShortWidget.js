import log from '../../log'
import React from 'react'

import {
  JumbotronShortWidget as appConfig
}
from '../../config/appConfig'

const JumbotronShortWidget = ({
  title = appConfig.title, subTitle = appConfig.subTitle
}) => {
  return (
    <div className="jumbotron-dashboard-widget">
      <div className="container">
        <h1>{title}</h1>
       <p>{subTitle}</p>
      </div>
    </div>
  )
}


JumbotronShortWidget.displayName = 'JumbotronShortWidget'

export default JumbotronShortWidget
