import React from 'react'
import {
  JumbotronHomeWidget as appConfigJumbotron, SearchBoxWidget as appConfigSearch
}

from '../../config/appConfig'

import { 
  SearchBoxWidget 
} from '../index'



const styles = {
  backgroundImage: {
    backgroundImage: 'url(http://lorempixel.com/800/400/city/)'
  }
}
const JumbotronHomeWidget = () => {
    return ( < div className = "jumbotron text-center"
        style = {
          styles.backgroundImage
        } >
        <div className = "container">
        <h1>{appConfigJumbotron.title}</h1> 
        <p>{appConfigJumbotron.subTitle}</p> 
        <SearchBoxWidget />
    < /div >  < /div >
  )
}


JumbotronHomeWidget.displayName = 'JumbotronHomeWidget'

export default JumbotronHomeWidget
