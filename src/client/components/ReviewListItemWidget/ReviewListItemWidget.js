import React from 'react'

const ReviewListItemWidget = ({
  name = 'ReviewListItemWidget'
}) => {
  return (
    <div> 
    <h3>Widget</h3>
    {name}
    </div>
  )
}
ReviewListItemWidget.displayName = 'ReviewListItemWidget'

export default ReviewListItemWidget
