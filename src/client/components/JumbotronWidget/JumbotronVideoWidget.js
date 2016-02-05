import React from 'react'

const styles = {
  backgroundImage: {
    backgroundImage: 'url(http://lorempixel.com/800/400/city/)'
  }
}
const JumbotronWidget = ({
    title = '', subTitle = ''
  }) => {
    return ( < div className = "jumbotron text-center"
        style = {
          styles.backgroundImage
        } >
        <div className = "container" >
          <h1>{title}</h1> 
          <p>{subTitle}</p>
        < /div> 
    < /div >
  )
}


JumbotronWidget.displayName = 'JumbotronWidget'

export default JumbotronWidget
