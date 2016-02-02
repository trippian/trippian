import React from 'react'
import {
  DashboardMenuWidget
}
from '../index'
const JumbotronDashboardWidget = ({
  title = '', subTitle = ''
}) => {
  return (
    <div className="jumbotron-dashboard-widget">
      <div className="container">
        <h1>User Dashboard</h1>
       <DashboardMenuWidget />
      </div>
    </div>
  )
}


JumbotronDashboardWidget.displayName = 'JumbotronDashboardWidget'

export default JumbotronDashboardWidget
