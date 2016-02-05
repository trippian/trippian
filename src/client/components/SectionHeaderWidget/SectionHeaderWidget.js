import React from 'react'

const SectionHeaderWidget = ({
  title = 'section title', subTitle
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
