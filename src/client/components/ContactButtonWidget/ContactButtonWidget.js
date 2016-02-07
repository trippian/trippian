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
  to = appConfig.to, text = appConfig.text
}) => {
  return (
    <Link to={to} className="btn btn-primary">{text}</Link>
  )
}
ContactButtonWidget.displayName = 'ContactButtonWidget'

export default ContactButtonWidget
