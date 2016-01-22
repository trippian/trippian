import React from 'react'

const DestinationPostFormWidget = ({
  name = 'DestinationPostFormWidget'
}) => {
  return (
    <div> 
    <h3>Widget</h3>
    {name}
    </div>
  )
}
DestinationPostFormWidget.displayName = 'DestinationPostFormWidget'

export default DestinationPostFormWidget
