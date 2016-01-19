import React from 'react'
import {
  Link
}
from 'react-router'
const AvatarWidget = ({
  link = 'http://trippian.com', imgSrc = 'http://lorempixel.com/200/200/people/', title = 'Avatar'
}) => {
  return (
    <Link to={link}>
        <div className="circle-image avatar">
            <img src={imgSrc} alt={title} />
        </div>
    </Link>
  )
}

AvatarWidget.displayName = 'AvatarWidget'

export default AvatarWidget
