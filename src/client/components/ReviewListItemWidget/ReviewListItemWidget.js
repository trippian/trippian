import React from 'react'
import {
  Link
}
from 'react-router'
import {
  CircleImageWidget, ContactButtonWidget, StarRatingWidget, RelativeTimeWidget
}
from '../index'

const ReviewListItemWidget = ({
  createdAt, username, facebookId, userAvatar, userId, rating, title, content, trippian
}) => {
  return (
    <div className="review-list-item clearfix">
        <div className="col-xs-12 col-sm-2 col-md-2">
            <CircleImageWidget imgSrc={userAvatar} />
        </div>
        <div className="col-xs-12 col-sm-10 col-md-10 text-expandable">
            <h4>{title}</h4>
            <div className="meta"> 
             <a href="#" title="">{username}</a>
             <i>
              <RelativeTimeWidget date={new Date('2016-01-30T04:13:28.003')} intl='en-US' />
              </i>
              <StarRatingWidget stars={rating}/>  
            </div>
            
            
            {content}                                  
        </div>            
    </div>
  )
}
ReviewListItemWidget.displayName = 'ReviewListItemWidget'

export default ReviewListItemWidget
