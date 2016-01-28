import React from 'react'
import {
  Link
}
from 'react-router'

import {
  CircleImageWidget, ContactButtonWidget, StarRatingWidget
}
from '../index'

const styles = {
  backgroundImage: {
    backgroundImage: 'url(http://lorempixel.com/800/400/city/)'
  }
}

const DestinationListItemWidget = ({
  title, details, summary, totalVotes, price
}) => {
  return (
    <div className="trippian-list-item row">
      <div className="col-xs-6 col-sm-2 col-md-2 col-xs-offset-3 col-sm-offset-0">
        <CircleImageWidget />
      </div>
      <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
        <div className="title-section">
          <h4>{name}</h4>
          <span>{details}, ${price}</span>
          <p>{summary}</p>
        </div>
      </div>
      <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
        <StarRatingWidget stars={totalVotes}/>
        <ContactButtonWidget />
      </div>
    </div>
  )
}

DestinationListItemWidget.displayName = 'DestinationListItemWidget'

export default DestinationListItemWidget




    // <div className="col-xs-12 col-sm-6 col-md-4 popular-destinations-item
    // ">  
    //     <Link to={`destination/${id}`} className="thumbnail text-center" style = {
    //         styles.backgroundImage
    //         }>
    //         <span>THIS IS JUST A TEST</span>
    //     </Link>
    //   </div>