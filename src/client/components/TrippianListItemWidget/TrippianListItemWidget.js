import React from 'react'

const TrippianListItemWidget = ({
  name = 'TrippianListItemWidget'
}) => {
  return (
    <div> 
    <h3>Widget</h3>
    {name}
    </div>
  )
}
TrippianListItemWidget.displayName = 'TrippianListItemWidget'

export default TrippianListItemWidget
