import React from 'react'

const FooterWidget = ({
  name = 'FooterWidget'
}) => {
  return (
    <div> 
    <h3>Widget</h3>
    {name}
    </div>
  )
}
FooterWidget.displayName = 'FooterWidget'

export default FooterWidget
