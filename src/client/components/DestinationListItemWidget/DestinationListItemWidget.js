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

const DestinationListItemWidget = ({
  destinationName, destinationImage, id
}) => {
  return (
<<<<<<< HEAD
    <div className="col-xs-12 col-sm-6 col-md-4 popular-destinations-item
    ">  
        <Link to={`destination/${id}`} className="thumbnail text-center" style = {
            styles.backgroundImage
            }>
            <span>{destinationName}</span>
=======
    <div className="col-xs-12 col-sm-6 col-md-4 popular-destinations-item">  
        <Link to={`destination/${id}`} className="thumbnail text-center" style = {
            styles.backgroundImage
            }>
            {destinationName}
>>>>>>> bug(client): fix files lost from reset
        </Link>
      </div>
  )
}

DestinationListItemWidget.displayName = 'DestinationListItemWidget'

<<<<<<< HEAD
export default DestinationListItemWidget
=======
export default DestinationListItemWidget
>>>>>>> bug(client): fix files lost from reset
