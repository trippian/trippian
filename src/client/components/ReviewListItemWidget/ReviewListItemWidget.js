import React from 'react'
import {
  Link
}
from 'react-router'
import {
  CircleImageWidget, ContactButtonWidget, StarRatingWidget
}
from '../index'

const ReviewListItemWidget = ({
  name, profilePicture, review, rating
}) => {
  return (
    <div className="review-list-item">
        <div className="col-xs-12 col-sm-2 col-md-2">
            <CircleImageWidget imgSrc={profilePicture} />
        </div>
        <div className="col-xs-12 col-sm-10 col-md-10 text-expandable">
            <h4><a href="#" title="">{name}</a></h4>
            <div className="meta"> 
             <i>3d ago</i> <StarRatingWidget stars={rating}/>  
            </div>
            {review}                                  
        </div>            
    </div>
  )
}
ReviewListItemWidget.displayName = 'ReviewListItemWidget'

export default ReviewListItemWidget
