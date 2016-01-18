import React from 'react'

const DestinationListItemWidget = ({
  name = 'DestinationListItemWidget'
}) => {
  return (
    <div> 
    <h3>Widget</h3>
    {name}
    </div>
  )
}
DestinationListItemWidget.displayName = 'DestinationListItemWidget'

export default DestinationListItemWidget
