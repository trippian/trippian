import React from 'react'

const TrippianListWidget = ({
  name = 'TrippianListWidget'
}) => {
  return (
    <div> 
    <h3>Widget</h3>
    {name}
    </div>
  )
}
TrippianListWidget.displayName = 'TrippianListWidget'

export default TrippianListWidget
