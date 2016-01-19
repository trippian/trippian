import React from 'react'

const CircleImageWidget = ({
  name = 'CircleImageWidget'
}) => {
  return (
    <div> 
    <h3>Widget</h3>
    {name}
    </div>
  )
}
CircleImageWidget.displayName = 'CircleImageWidget'

export default CircleImageWidget
