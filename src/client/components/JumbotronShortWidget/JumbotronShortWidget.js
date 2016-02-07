import React from 'react'

const JumbotronShortWidget = ({
  title = '', subTitle = ''
}) => {
  return (
    <div className="jumbotron-dashboard-widget">
      <div className="container">
        <h1>{title}</h1>
       <p>{subTitle}</p>
      </div>
    </div>
  )
}


JumbotronShortWidget.displayName = 'JumbotronShortWidget'

export default JumbotronShortWidget
