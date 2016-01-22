import React from 'react'

const DestinationListWidget = ({
  name = 'DestinationListWidget'
}) => {
  return (
    <div> 
    <h3>Widget</h3>
    {name}
    </div>
  )
}
DestinationListWidget.displayName = 'DestinationListWidget'

export default DestinationListWidget