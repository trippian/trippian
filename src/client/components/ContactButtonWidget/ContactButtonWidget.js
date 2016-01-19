import React from 'react'
import {
  Link
}
from 'react-router'

const ContactButtonWidget = ({
  to = 'contact', text = 'Contact'
}) => {
  return (
    <Link to={to} className="btn btn-primary btn-lg">{text}</Link>
  )
}
ContactButtonWidget.displayName = 'ContactButtonWidget'

export default ContactButtonWidget
