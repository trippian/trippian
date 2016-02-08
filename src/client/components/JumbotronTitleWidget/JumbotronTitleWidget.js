import log from '../../log'
import React from 'react'
import {
  Link
}
from 'react-router'

const JumbotronTitleWidget = ({
  title = 'title', subTitle = 'subTitle'
}) => {
  return (
    <div className = "container" >
      <div className="col-sm-12 col-md-8 col-md-offset-2 text-center">
        <h1>{title}</h1> 
        <p>{subTitle}</p>
      </div>
    </div>
  )
}
JumbotronTitleWidget.displayName = 'JumbotronTitleWidget'

export default JumbotronTitleWidget
