import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}
from '../../components/index'

import store from '../../redux/store'
import {
  Link
}
from 'react-router'
export default class Admin extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const isUserAdmin = store.getState().appState.get('isUserAdmin')
    console.log('is user admin?', isUserAdmin)
    return (
      <div id="admin-page">
        <JumbotronWidget title="Admin Dashboard" subTitle="Lorem ipsum dolor sit amet."/>
      <div className="container main-content-container">
        <div className="col-sm-12 col-md-12 content-container">
        {!isUserAdmin && 
           <h3>You donot have access to this page. Login as admin first</h3>
        }
        {isUserAdmin &&
            <div>
              <ul className="list-inline">
                <li><Link to='admin/destination'>Destination </Link></li>
                <li><Link to='admin/trippian'>Trippian </Link></li>
                <li><Link to='admin/inquiry'>Inquiry </Link></li>
                <li><Link to='admin/trip'>Trip </Link></li>
              </ul>
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
