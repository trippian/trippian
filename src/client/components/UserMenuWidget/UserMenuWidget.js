import React from 'react'
import {
  Link
}
from 'react-router'
import store from '../../redux/store'
import {
  FormattedMessage
}
from 'react-intl'

const UserMenuWidget = () => {
  const {
    displayName, isAdmin = true, picture = ''
  } = store.getState().appState.get('user')

  return (
    <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown"> 
         <FormattedMessage 
            id="nav-widget.welcome-message"
            description="a short welcome message for use at nav menu"
            defaultMessage="Hello "/> 
            
            <span className="circle-image nav-user-avatar">
              <img src={picture} alt={displayName} />
            </span>  
        <b className="caret"></b>
        </a>
        <ul className="dropdown-menu">
            {isAdmin && <li><Link to='admin'>Admin Dashboard</Link></li>}
            <li>
                <Link to='dashboard'>
                    <FormattedMessage 
                        id="app-pages.user-dashboard" 
                        description="the link for user dashboard"
                        defaultMessage="User Dashboard"/>
                </Link>
            </li>
            <li><a href="#">Friends</a></li>
            <li>
                <a href="#">
                    <FormattedMessage 
                        id="app-shared.logout" 
                        description="logout link text"
                        defaultMessage="Logout"
                    />
                </a>
            </li>
            <li><Link to='destination-post'>Post a Destination</Link></li>
            <li><Link to='login'>Login</Link></li>
            <li><Link to='login/logout'>Logout</Link></li>
            <li><Link to='intl' className="btn btn-bordered">Intl Demo</Link></li>
        </ul>
    </li>
  )
}
UserMenuWidget.displayName = 'UserMenuWidget'

export default UserMenuWidget
