import React from 'react'

const NoContentWidget = ({
  name = 'NoContentWidget', message = 'There is no content'
}) => {
  return (
    <div> 
        <h3>{message}</h3>
    </div>
  )
}
NoContentWidget.displayName = 'NoContentWidget'

export default NoContentWidget
