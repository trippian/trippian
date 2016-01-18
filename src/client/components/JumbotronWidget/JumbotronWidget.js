import React from 'react'

const styles = {
  backgroundImage: {
    backgroundImage: 'url(http://lorempixel.com/800/400/city/)'
  }
}
const JumbotronWidget = () => {
    return ( < div className = "jumbotron text-center"
        style = {
          styles.backgroundImage
        } >
        < div className = "container" >
        <h1>Start Now
      </h1> < p > Find your local trip companion around the world < /p> 

        < form action = ""
        method = "POST"
        className = "form-inline"
        role = "form" >
        <div className="form-group">
      <label className="sr-only">search for destinations</label> < input type = "text" className = "form-contro" placeholder = "Bali..." / >
   < /div> 
   < button type = "submit"
    className = "btn btn-primary" > Go < /button> < /form >
    < /div >  < /div >
  )
}


JumbotronWidget.displayName = 'JumbotronWidget'

export default JumbotronWidget
