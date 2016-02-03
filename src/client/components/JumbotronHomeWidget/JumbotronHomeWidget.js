import React from 'react'

import {
  SearchBoxWidget
}
from '../index'



const styles = {
  backgroundImage: {
    backgroundImage: 'url(http://lorempixel.com/800/400/city/)'
  }
}
const JumbotronHomeWidget = ({
    title, subTitle, history
  }) => {
    return ( < div className = "jumbotron text-center"
        style = {
          styles.backgroundImage
        } >
        <div className = "container">
        <h1>{title}</h1> 
        <p>{subTitle}</p> 
        <SearchBoxWidget history={history}/>
    < /div >  < /div >
  )
}


JumbotronHomeWidget.displayName = 'JumbotronHomeWidget'

export default JumbotronHomeWidget
