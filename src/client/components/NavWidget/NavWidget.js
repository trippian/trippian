import React from 'react'
import {
  Link
}
from 'react-router'
const NavWidget = ({
  name = 'NavWidget'
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
            <a className="navbar-brand" href="/">Trippian</a>
        </div>
        <div className="collapse navbar-collapse navbar-ex1-collapse">
            <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
            <ul className="nav navbar-nav navbar-right">
                <li><Link to='become-a-trippian' className="btn btn-bordered">Become a Trippian</Link></li>
                <li><Link to='trippian/212'>Trippian List</Link></li>
                <li><Link to='trippian/212'>Trippian Detail</Link></li>
                <li><Link to='destination/2'>Destination</Link></li>
                <li><Link to='inquiry/2'>Inquiry</Link></li>
                <li><Link to='inquiry'>Inquiry List</Link></li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Menu <b className="caret"></b></a>
                    <ul className="dropdown-menu">
                        <li><a href="#">Account</a></li>
                        <li><a href="#"> Friends</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
  )
}

NavWidget.displayName = 'NavWidget'

export default NavWidget
