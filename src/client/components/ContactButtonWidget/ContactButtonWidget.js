import React from 'react'
import {
  Link
}
from 'react-router'
import {
  ContactButtonWidget as appConfig
}
from '../../config/appConfig'
const ContactButtonWidget = ({
  to = appConfig.to, text = appConfig.text, name = ''
}) => {
  return (
    <div className="contact-button-widget">
        <Link to={to} className="btn btn-primary">{text}
            {name!== '' && <i>{name}</i>}
        </Link>
    </div>
  )
}
ContactButtonWidget.displayName = 'ContactButtonWidget'

export default ContactButtonWidget
