import React from 'react'

const ReviewListWidget = ({
  name = 'ReviewListWidget'
}) => {
  return (
    <div> 
    <h3>Widget</h3>
    {name}
    </div>
  )
}
ReviewListWidget.displayName = 'ReviewListWidget'

export default ReviewListWidget
