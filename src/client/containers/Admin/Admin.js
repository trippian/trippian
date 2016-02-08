import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronShortWidget, AdminMenuWidget
}
from '../../components/index'

import store from '../../redux/store'
import {
  Link
}
from 'react-router'
import {
  Admin as appConfig
}

from '../../config/appConfig'

export default class Admin extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const isAdmin = store.getState().appState.get('user').isAdmin
    log.info('is user admin?', isAdmin)
    return (
      <div id="admin-page">
        <JumbotronShortWidget title={appConfig.title} subTitle={appConfig.subTitle}/>
          <div className="container main-content-container">
            <div className="col-sm-12 col-md-12 content-container">
            {!isAdmin && 
               <h3>{appConfig.noAccessMessage}</h3>
            }
            {isAdmin &&
                <div>
                 <AdminMenuWidget />
                  <hr/>
                  {this.props.children}
                </div>
             }
          </div>
        </div>
    </div>
    )
  }
}
Admin.propTypes = {
  name: PropTypes.string
}

Admin.displayName = 'Admin Page'
