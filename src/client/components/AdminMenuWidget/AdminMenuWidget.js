import log from '../../log'
import React from 'react'
import {
  Link
}
from 'react-router'
import {
  AdminMenuWidget as appConfig
}
from '../../config/appConfig'

const AdminMenuWidget = () => {
  return (
    <ul className="list-inline">
      <li><Link to={appConfig.destination.link}>{appConfig.destination.text} </Link></li>
      <li><Link to={appConfig.user.link}>{appConfig.user.text} </Link></li>
      <li><Link to={appConfig.trippian.link}>{appConfig.trippian.text} </Link></li>
      <li><Link to={appConfig.inquiry.link}>{appConfig.inquiry.text} </Link></li>
      <li><Link to={appConfig.trip.link}>{appConfig.trip.text} </Link></li>
      <li><Link to={appConfig.dashboard.link}>{appConfig.dashboard.text} </Link></li>
    </ul>
  )
}

AdminMenuWidget.displayName = 'AdminMenuWidget'

export default AdminMenuWidget
