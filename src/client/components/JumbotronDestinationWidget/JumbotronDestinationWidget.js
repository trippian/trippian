import React from 'react'

import {
  StarRatingWidget

}

from '../../components/index'

const styles = {
  backgroundImage: {
    backgroundImage: 'url(http://lorempixel.com/800/400/city/)'
  }
}
const JumbotronDestinationWidget = ({
  name, slogan = 'Awesome City', feature = '', averageRating = 5
}) => {
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
