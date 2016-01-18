import React from 'react'
import {
  Link
}
from 'react-router'

const FooterWidget = () => {
  return (
    <footer>
        <div className="footer-links">
            <Link to='/'>Home</Link>
            <Link to='about'>About</Link>
            <Link to='join-us'>Join Us</Link>
            <Link to='press'>Press</Link>
        </div>
        <a href="http://www.trippian.com">Trippian.com</a>
        <a href="https://github.com/trippian/trippian" alt="Trippian Github">
            <i className="fa fa-github"></i>
        </a>
    </footer>
  )
}
FooterWidget.displayName = 'FooterWidget'

export default FooterWidget
