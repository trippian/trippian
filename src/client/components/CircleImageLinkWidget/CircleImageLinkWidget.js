import log from '../../log'
import React from 'react'
import {
  defaults as appConfig
}
from '../../config/appConfig'
export default ({
  link = appConfig.link, src = appConfig.circleImageBackground, alt = appConfig.imageAlt
}) => {
  return (
    <a href={link} className="circle">
        <img src={src} alt={alt} />
    </a>
  )
}
