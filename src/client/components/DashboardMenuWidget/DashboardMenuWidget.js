import React from 'react'
import {
  Link
}
from 'react-router'

import {
  FormattedMessage
}
from 'react-intl'
import {
  DashboardMenuWidget as appConfig
}
from '../../config/appConfig'


const DashboardMenuWidget = ({
  isTrippian, isAdmin
}) => {
  console.log('----inside DashboardMenuWidget render', isTrippian, isAdmin)
  return (
    <ul className="user-menu-widget list-inline">   
        <li><Link to={appConfig.myProfile.link}>{appConfig.myProfile.text}</Link></li>
        <li><Link to={appConfig.myInquiries.link}>{appConfig.myInquiries.text}</Link></li>
        <li><Link to={appConfig.myTripBox.link}>{appConfig.myTripBox.text}</Link></li>
        {isTrippian && <li><Link to={appConfig.myPostedTrips.link}>{appConfig.myPostedTrips.text}</Link></li> }
        {(isAdmin || isTrippian) && <li><Link to={appConfig.createDestination.link}>{appConfig.createDestination.text}</Link></li>}
        <li><Link to={appConfig.logout.link}>{appConfig.logout.text}</Link></li>
        {isAdmin && <li><Link to={appConfig.admin.link}>{appConfig.admin.text}</Link></li>}
    </ul>
  )
}

DashboardMenuWidget.displayName = 'DashboardMenuWidget'

export default DashboardMenuWidget
