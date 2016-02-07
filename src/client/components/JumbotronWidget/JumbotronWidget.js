import React from 'react'
import {
  defaults as appConfig
}
from '../../config/appConfig'

const JumbotronWidget = ({
  title = '', subTitle = '', backgroundImage = appConfig.jumbotronBackground
}) => {
  const styles = {
    backgroundImage: {
      backgroundImage: `url(${backgroundImage})`
    }
  }
  return ( < div className = "jumbotron text-center"
    style = {
      styles.backgroundImage
    } >
    <div className="container" >
          <h1>{title}</h1> 
          <p>{subTitle}</p>
        </div> < /div>
  )
}


JumbotronWidget.displayName = 'JumbotronWidget'

export default JumbotronWidget
