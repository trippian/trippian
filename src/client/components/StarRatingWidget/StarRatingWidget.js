import React from 'react'

const StarRatingWidget = ({
  name = 'StarRatingWidget'
}) => {
  return (
    <div> 
    <h3>Widget</h3>
    {name}
    </div>
  )
}
StarRatingWidget.displayName = 'StarRatingWidget'

export default StarRatingWidget
