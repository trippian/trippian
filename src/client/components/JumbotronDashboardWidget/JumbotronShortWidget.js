import React from 'react'
import {
  DashboardMenuWidget
}
from '../index'
const JumbotronDashboardWidget = ({
  title = '', subTitle = '', user
}) => {
  return (
    <div className="jumbotron-dashboard-widget">
      <div className="container">
        <h1>User Dashboard</h1>
       <DashboardMenuWidget {...user} />
      </div>
    </div>
  )
}


JumbotronDashboardWidget.displayName = 'JumbotronDashboardWidget'

export default JumbotronDashboardWidget
