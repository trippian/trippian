import React from 'react'
import {
  Link
}
from 'react-router'

const styles = {
  backgroundImage: {
    backgroundImage: 'url(http://lorempixel.com/800/400/city/)'
  }
}

const TripListItemWidget = ({
  tripSummary
}) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 popular-destinations-item">  
        <Link to={`trip/${id}`} className="thumbnail text-center" style = {
            styles.backgroundImage
            }>
            {tripSummary}
        </Link>
      </div>
  )
}

TripListItemWidget.displayName = 'TripListItemWidget'

export default TripListItemWidget