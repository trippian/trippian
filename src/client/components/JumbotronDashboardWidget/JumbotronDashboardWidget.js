import log from '../../log'
import React from 'react'
import {
  DashboardMenuWidget
}
from '../index'
import {
  JumbotronDashboardWidget as appConfig
}
from '../../config/appConfig'

const JumbotronDashboardWidget = ({
  title = appConfig.title, subTitle = appConfig.subTitle, user
}) => {
  return (
    <div className="jumbotron-dashboard-widget">
      <div className="container">
        <h1>{title}</h1>
       <DashboardMenuWidget {...user} />
      </div>
    </div>
  )
}


JumbotronDashboardWidget.displayName = 'JumbotronDashboardWidget'

export default JumbotronDashboardWidget
