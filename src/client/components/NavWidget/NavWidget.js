import React from 'react'
import {
  Link
}
from 'react-router'

import {
  SearchBoxWidget, LocaleMenuWidget
}
from '../index'

import {
  FormattedMessage
}
from 'react-intl'
import store from '../../redux/store'

function renderSearchForm() {
  return (
    <SearchBoxWidget className="navbar-form navbar-left" role="search" />
  )
}


const NavWidget = ({
  name = 'NavWidget', currentPath, username = '', displayName = '', isUserAdmin = false
}) => {
  return (
    <nav className="navbar navbar-default" role="navigation">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">
                <img src="logo.png" alt="Trippian"/>
            </Link>
        </div>
        <div className="collapse navbar-collapse navbar-ex1-collapse">
            
            <LocaleMenuWidget className="nav navbar-nav navbar-right list-inline"/>
            <ul className="nav navbar-nav navbar-right">
                <li>{currentPath === '/'  ? null : renderSearchForm() }</li>
                <li><Link to="login">Login </Link></li>
                <li>
                    <Link to='become-a-trippian' className="btn btn-bordered">
                        <FormattedMessage 
                            id="app-pages.become-a-trippian" 
                            description="become a trippian page title"
                            defaultMessage="Become a Trippian"
                        />
                    </Link>
                </li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"> 
                     <FormattedMessage 
                        id="nav-widget.welcome-message"
                        description="a short welcome message for use at nav menu"
                        defaultMessage="Hello "
                     /> 
                     {` ${displayName}`}  
                    <b className="caret"></b>
                    </a>
                    <ul className="dropdown-menu">
                        {isUserAdmin && <li><Link to='admin'>Admin Dashboard</Link></li>}
                        <li>
                            <Link to='dashboard'>
                                <FormattedMessage 
                                    id="app-pages.user-dashboard" 
                                    description="the link for user dashboard"
                                    defaultMessage="User Dashboard"
                                />
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
                        <li><Link to='intl' className="btn btn-bordered">Intl Demo</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
  )
}

NavWidget.displayName = 'NavWidget'

export default NavWidget
