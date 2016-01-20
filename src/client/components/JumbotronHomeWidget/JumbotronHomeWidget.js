import React from 'react'
import {
  JumbotronHomeWidget as appConfigJumbotron, SearchBoxWidget as appConfigSearch
}
from '../../config/appConfig'

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
        < div className = "container" >
        <h1>{appConfigJumbotron.title}</h1> < p > {
          appConfigJumbotron.subTitle
        } < /p> 

        < form action = ""
        method = "POST"
        className = "form-inline"
        role = "form" >
        <div className="form-group">
      <label className="sr-only">search for destinations</label> < input type = "text" className = "form-contro" placeholder = {appConfigSearch.placeholderText} / >
   < /div> 
   < button type = "submit"
    className = "btn btn-primary" > {appConfigSearch.searchButtonText} < /button> < /form >
    < /div >  < /div >
  )
}


JumbotronHomeWidget.displayName = 'JumbotronHomeWidget'

export default JumbotronHomeWidget
