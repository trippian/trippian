import React from 'react'

const ReviewAddFormWidget = ({
  name = 'ReviewAddFormWidget'
}) => {
  return (
    <div> 
    <h3>Widget</h3>
    {name}
    </div>
  )
}
ReviewAddFormWidget.displayName = 'ReviewAddFormWidget'

export default ReviewAddFormWidget
