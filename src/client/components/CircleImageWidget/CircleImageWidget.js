import React from 'react'

import {
  Link
}
from 'react-router'

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
  link = 'http://www.trippian.com', imageSrc = 'http://lorempixel.com/200/200/people/', title = 'Circle Image'
}) => {
  return (
    <div className="avatar circle-image">
        {renderImage(imageSrc, link, title)}
    </div>
  )
}
CircleImageWidget.displayName = 'CircleImageWidget'

export default CircleImageWidget
