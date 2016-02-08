import log from '../../log'
import React from 'react'

import {
  Link
}
from 'react-router'
import {
  CircleImageWidget as appConfig
}
from '../../config/appConfig'

const renderImage = (imageSrc, link, title) => {
  const imageHTML = <img src={imageSrc} alt={title} />
  if (link) {
    return (
      <Link to={link}>{imageHTML}</Link>
    )
  }
  return imageHTML
}
const CircleImageWidget = ({
  link = appConfig.link, imageSrc = appConfig.imageSrc, title = appConfig.imageAlt
}) => {
  log.info('--inside CircleImageWidget', link, imageSrc, title)
  return (
    <div className="avatar circle-image">
        {renderImage(imageSrc, link, title)}
    </div>
  )
}
CircleImageWidget.displayName = 'CircleImageWidget'

export default CircleImageWidget
