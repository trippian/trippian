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
  currentPath, user, history
}) => {
  const {
    isAuthed, isTrippian
  } = user

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
                <img src="https://s3-us-west-1.amazonaws.com/trippian/logo-trans-white.png" alt="Trippian"/>
            </Link>
        </div>
        <div className="collapse navbar-collapse navbar-ex1-collapse">
            <LocaleMenuWidget className="nav navbar-nav navbar-right list-inline"/>
            <ul className="nav navbar-nav navbar-right">
                {!isTrippian&& <li>
                    <Link to='become-a-trippian' className="btn btn-bordered">
                        <FormattedMessage 
                            id="app-pages.become-a-trippian" 
                            description="become a trippian page title"
                            defaultMessage="Become a Trippian"/>
                    </Link>
                </li>}
                {isAuthed && <UserMenuWidget user={user}/>}
                {!isAuthed && <li><Link to="login">Login </Link></li>}
            </ul>
        </div>
    </nav>
  )
}
NavWidget.displayName = 'NavWidget'
export default NavWidget

//<li>{currentPath !== '/' && <SearchBoxWidget history={history} className="navbar-form navbar-left" role="search" /> }</li>


// import React, {
//   Component
// }
// from 'react'
// import {
//   Link
// }
// from 'react-router'

// import {
//   SearchBoxWidget, LocaleMenuWidget
// }
// from '../index'

// import {
//   FormattedMessage
// }
// from 'react-intl'
// import store from '../../redux/store'
// import {
//   connect
// }
// from 'react-redux'
// import {
//   UserMenuWidget
// }
// from '../index'

// function renderSearchForm() {
//   return (
//     <SearchBoxWidget className="navbar-form navbar-left" role="search" />
//   )
// }

// function mapStateToProps(state) {
//   return {
//     user: state.appState.get('user')
//   }
// }

// @
// connect(mapStateToProps)
// export default class NavWidget extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {}
//   }

//   render() {
//     const {
//       isAuthed, isTrippian
//     } = this.props.user
//       // currentPath, username = '', displayName = '', isUserAdmin = false, history
//     return (
//       <nav className="navbar navbar-default" role="navigation">
//         <div className="navbar-header">
//             <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
//                 <span className="sr-only">Toggle navigation</span>
//                 <span className="icon-bar"></span>
//                 <span className="icon-bar"></span>
//                 <span className="icon-bar"></span>
//             </button>
//             <Link className="navbar-brand" to="/">
//                 <img src="https://s3-us-west-1.amazonaws.com/trippian/logo-trans-white.png" alt="Trippian"/>
//             </Link>
//         </div>
//         <div className="collapse navbar-collapse navbar-ex1-collapse">
//             <LocaleMenuWidget className="nav navbar-nav navbar-right list-inline"/>
//             <ul className="nav navbar-nav navbar-right">
//                 {!isTrippian || !isAuthed && <li>
//                     <Link to='become-a-trippian' className="btn btn-bordered">
//                         <FormattedMessage 
//                             id="app-pages.become-a-trippian" 
//                             description="become a trippian page title"
//                             defaultMessage="Become a Trippian"/>
//                     </Link>
//                 </li>}
//                 {isAuthed && <UserMenuWidget />}
//                 {!isAuthed && <li><Link to="login">Login </Link></li>}
//             </ul>
//         </div>
//     </nav>
//     )
//   }
// }
// NavWidget.displayName = 'NavWidget'

// //<li>{currentPath !== '/' && <SearchBoxWidget history={history} className="navbar-form navbar-left" role="search" /> }</li>
