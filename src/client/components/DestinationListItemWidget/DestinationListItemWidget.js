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
  name = 'Sydney'
}) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 popular-destinations-item
    ">  
        <Link to='destination/12' className="thumbnail text-center" style = {
            styles.backgroundImage
            }>
            <span>{name}</span>
          
        </Link>
      </div>
  )
}

DestinationListItemWidget.displayName = 'DestinationListItemWidget'

export default DestinationListItemWidget
