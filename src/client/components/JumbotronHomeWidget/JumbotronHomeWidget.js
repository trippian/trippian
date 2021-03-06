import log from '../../log'
import React from 'react'

import {
  SearchBoxWidget, AutoSuggestBoxWidget
}
from '../index'



const styles = {
  backgroundImage: {
    // https://s3-us-west-1.amazonaws.com/trippian/test2.gif change this when ready for deploying
    backgroundImage: 'url(https://s3-us-west-1.amazonaws.com/trippian/test2.gif)'
  }
}
const JumbotronHomeWidget = ({
  title = '', subTitle = '', history
}) => {

  return (
    <div className="jumbotron text-center jumbotron-fixed">
        <div className="container">
        <h1>{title}</h1> 
        <p>{subTitle}</p> 
        <SearchBoxWidget/>
        </div>  
      </div>
  )
}


JumbotronHomeWidget.displayName = 'JumbotronHomeWidget'

export default JumbotronHomeWidget
