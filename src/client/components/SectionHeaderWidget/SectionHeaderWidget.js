import React from 'react'

const SectionHeaderWidget = ({
  title = 'section title', subTitle = 'section subTitle, Lorem ipsum dolor sit amet. '
}) => {
  return (
    <div className="section-header text-center">
       <h2>{title}</h2>
       <p>{subTitle}</p>
   </div>
  )
}
SectionHeaderWidget.displayName = 'SectionHeaderWidget'

export default SectionHeaderWidget
