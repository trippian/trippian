import React from 'react'

const NoContentWidget = ({
  name = 'NoContentWidget'
}) => {
  return (
    <div> 
    <h3>Widget</h3>
    {name}
    </div>
  )
}
NoContentWidget.displayName = 'NoContentWidget'

export default NoContentWidget
