import React from 'react'
const JumbotronPlainBgWidget = ({
  title = '', subTitle = ''
}) => {
  return (
    <div className="jumbotron-plain-bg-widget">
      <div className="container">
        <h1 className="title">{title}</h1>
       <p>{subTitle}</p>
      </div>
    </div>
  )
}


JumbotronPlainBgWidget.displayName = 'JumbotronPlainBgWidget'

export default JumbotronPlainBgWidget
