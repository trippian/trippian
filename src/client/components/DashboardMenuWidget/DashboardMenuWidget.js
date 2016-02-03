import React from 'react'
import {
  Link
}
from 'react-router'

import {
  FormattedMessage
}
from 'react-intl'
import store from '../../redux/store'

const DashboardMenuWidget = ({
  name = 'DashboardMenuWidget'
}) => {
  const {
    trippian, isTrippian, isAdmin
  } = store.getState().appState.get('user')
  return (
    <ul className="user-menu-widget list-inline">   
        <li><Link to='dashboard/my-profile'>My Profile</Link></li>
        <li><Link to='dashboard/my-inquiries'>My Inquiries</Link></li>
        <li><Link to='dashboard/my-trip-box'>My Trip Box</Link></li>
        {trippian && <li><Link to='dashboard/manage-trips'>Manage Trips</Link></li>  }
        {isAdmin || trippian && <li><Link to='dashboard/destination-post'>Post a Destination</Link></li> }
        {isAdmin && <li><Link to='admin'>Admin</Link></li>  }
        <li><Link to='login/logout'>Logout</Link></li>
    </ul>
  )
}

DashboardMenuWidget.displayName = 'DashboardMenuWidget'

export default DashboardMenuWidget
