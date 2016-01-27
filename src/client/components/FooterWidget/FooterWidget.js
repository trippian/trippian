import React from 'react'
import {
  Link
}
from 'react-router'
import {
  FormattedMessage
}
from 'react-intl'
const FooterWidget = () => {
  return (
    <footer>
        <div className="footer-links">
            <Link to='/'>
                <FormattedMessage 
                    id="app-pages.home" 
                    description="home page title"
                    defaultMessage="Home"
                />


            </Link>
            <Link to='about'>
                <FormattedMessage 
                    id="app-pages.about" 
                    description="about page title"
                    defaultMessage="About"
                />
            </Link>
            <Link to='join-us'>
                <FormattedMessage 
                    id="app-pages.join-us" 
                    description="join us page title"
                    defaultMessage="Join Us"
                />
            </Link>
            <Link to='press'>
                <FormattedMessage 
                    id="app-pages.press" 
                    description="press page title"
                    defaultMessage="Press"
                />
            </Link>
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
