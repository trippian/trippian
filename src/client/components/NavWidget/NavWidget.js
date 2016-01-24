import React from 'react'
import {
  Link
}
from 'react-router'

import {
  SearchBoxWidget, LocaleMenu
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
  name = 'NavWidget', currentPath
}) => {
  const username = store.getState().appState.get('displayName')
  return (
    <nav className="navbar navbar-default" role="navigation">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">
                <img src="logo.png" alt="Trippian"/>
            </a>
        </div>
        <div className="collapse navbar-collapse navbar-ex1-collapse">

            <LocaleMenu className="nav navbar-nav navbar-right list-inline"/>
            <ul className="nav navbar-nav navbar-right">
                <li>{currentPath === '/'  ? null : renderSearchForm() }</li>
                <li><Link to='become-a-trippian' className="btn btn-bordered">Become a Trippian</Link></li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"> 
                     <FormattedMessage 
                        id="nav-widget.welcome-message"
                        description="a short welcome message for use at nav menu"
                        defaultMessage="Hello "
                     /> 
                     {username}  
                    <b className="caret"></b>
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link to='trippian-edit'>Edit My Profile</Link></li>
                        <li><a href="#">Friends</a></li>
                        <li><a href="#">Logout</a></li>
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
