import React from 'react'

const ContactButtonWidget = ({
  name = 'ContactButtonWidget'
}) => {
  return (
    <div> 
    <h3>Widget</h3>
    {name}
    </div>
  )
}
ContactButtonWidget.displayName = 'ContactButtonWidget'

export default ContactButtonWidget
