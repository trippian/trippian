import React from 'react'

import {
  StarRatingWidget

}

from '../../components/index'


const JumbotronDestinationWidget = ({
  name, slogan = 'Awesome City', feature = 'http://lorempixel.com/800/600/city/', averageRating = 5
}) => {
  const styles = {
    backgroundImage: {
      backgroundImage: `url(${feature})`
    }
  }

  return ( < div className = "jumbotron"
    style = {
      styles.backgroundImage
    } >
    <div className="full-length-container">
      <div className="container">
        <div className="col-sm-12 col-md-8 col-md-offset-2">
          <div className="meta-info">
            <h2>{name}</h2>
            <div className="text-intro">
              <span>{slogan} &nbsp;&nbsp;&nbsp; </span>
              <StarRatingWidget stars={averageRating} />
            </div>
          </div>
        </div>  
      </div>
    </div> < /div>
  )
}


JumbotronDestinationWidget.displayName = 'JumbotronDestinationWidget'

export default JumbotronDestinationWidget
