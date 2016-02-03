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
import {
  UserMenuWidget
}
from '../index'

function renderSearchForm() {
  return (
    <SearchBoxWidget className="navbar-form navbar-left" role="search" />
  )
}


const NavWidget = ({
  currentPath, username = '', displayName = '', isUserAdmin = false
}) => {
  const {
    isAuthed
  } = store.getState().appState.get('user')

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
                
                <li>
                    <Link to='become-a-trippian' className="btn btn-bordered">
                        <FormattedMessage 
                            id="app-pages.become-a-trippian" 
                            description="become a trippian page title"
                            defaultMessage="Become a Trippian"/>
                    </Link>
                </li>
                {isAuthed && <UserMenuWidget />}
                {!isAuthed && <li><Link to="login">Login </Link></li>}
            </ul>
        </div>
    </nav>
  )
}

NavWidget.displayName = 'NavWidget'

export default NavWidget
