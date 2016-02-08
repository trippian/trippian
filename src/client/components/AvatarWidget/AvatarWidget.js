import React from 'react'
import {
  Link
}
from 'react-router'
import {
  AvatarWidget as appConfig
}
from '../../config/appConfig'

const AvatarWidget = ({
  link = appConfig.link, imgSrc = appConfig.imgSrc, title = appConfig.title
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
