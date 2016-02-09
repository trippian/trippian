import log from '../../log'
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

const UserMenuWidget = ({
  displayName, isAdmin, picture, isAuthed
}) => {
  // const {

  // } = store.getState().appState.get('user')

  return (
    <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown"> 
            <FormattedMessage
               id="UserMenuWdiget.welcomeMessage"
               description="welcomeMessage"
               defaultMessage="Hello"/>
            <span className="circle-image nav-user-avatar">
              <img src={picture} alt={displayName} />
            </span>  
        <b className="caret"></b>
        </a>
        <ul className="dropdown-menu">
            <li>
                <Link to='dashboard'>
                    <FormattedMessage 
                        id="app-pages.user-dashboard" 
                        description="the link for user dashboard"
                        defaultMessage="User Dashboard"/>
                </Link>
            </li>       
            {isAdmin && <li><Link to='admin'>Settings</Link></li>}
            {isAuthed && <li><Link to="login/logout">Logout </Link></li>}

        </ul>
    </li>
  )
}
UserMenuWidget.displayName = 'UserMenuWidget'

export default UserMenuWidget
