import React from 'react'
import {
  Link
}
from 'react-router'

import {
  FormattedMessage
}
from 'react-intl'

const DashboardMenuWidget = ({
  isTrippian, isAdmin, name = ''
}) => {

  console.log('----inside DashboardMenuWidget render', isTrippian, isAdmin, name)
  return (
    <ul className="user-menu-widget list-inline">   
        <li><Link to='dashboard/my-profile'>My Profile</Link></li>
        <li><Link to='dashboard/my-inquiries'>My Inquiries</Link></li>
        <li><Link to='dashboard/my-trip-box'>My Trip Box</Link></li>
        {isTrippian && <li><Link to='dashboard/my-posted-trips'>Posted Trips</Link></li>  }
        {isAdmin || isTrippian && <li><Link to='dashboard/destination-post'>Post a Destination</Link></li> }
        {isAdmin && <li><Link to='admin'>Admin</Link></li>  }
        <li><Link to='login/logout'>Logout</Link></li>
    </ul>
  )
}

DashboardMenuWidget.displayName = 'DashboardMenuWidget'

export default DashboardMenuWidget
