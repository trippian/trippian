import log from '../../log'
import React from 'react'
import {
  SectionHeaderWidget as appConfig
}
from '../../config/appConfig'

const SectionHeaderWidget = ({
  title = appConfig.title, subTitle = appConfig.subTitle
}) => {
  return (
    <div className="section-header text-center">
       <h2>{title}</h2>
       {subTitle && <p>{subTitle}</p> }
   </div>
  )
}
SectionHeaderWidget.displayName = 'SectionHeaderWidget'

export default SectionHeaderWidget
