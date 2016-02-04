import React from 'react'
import {
  Link
}
from 'react-router'
import {
  CircleImageWidget, ContactButtonWidget, StarRatingWidget, RelativeTimeWidget, UserLinkWidget
}
from '../index'

const ReviewListItemWidget = ({
  review
}) => {
  const {
    createdAt, username, displayName, facebookId, googleId, picture, id, website, rating, title, content = '', trippian
  } = review.properties
  const userLinkData = {
    id: id,
    facebookId: facebookId,
    googleId: googleId,
    username: username,
    displayName: displayName,
    picture: picture,
    website: website,
    showFacebookLink: true,
    showGoogleLink: true,
    showTrippianLink: true,
    showWebSiteLink: true,
    showMobile: true
  }
  return (
    <div className="review-list-item clearfix">
        <div className="col-xs-12 col-sm-2 col-md-2">
            <CircleImageWidget imgSrc={picture} />
        </div>
        <div className="col-xs-12 col-sm-10 col-md-10 text-expandable">
            <h4>{title}</h4>
            <div className="meta"> 
              <StarRatingWidget stars={rating}/> 
              <UserLinkWidget {...userLinkData} />
              <RelativeTimeWidget date={new Date(createdAt)} intl='en-US' />
            </div>      
            {content}                                  
        </div>            
    </div>
  )
}
ReviewListItemWidget.displayName = 'ReviewListItemWidget'

export default ReviewListItemWidget
