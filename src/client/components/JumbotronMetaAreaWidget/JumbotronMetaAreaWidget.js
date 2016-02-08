import React from 'react'
import {
  Link
}
from 'react-router'
import {
  ContactButtonWidget, StarRatingWidget
}
from '../index'
import {
  photos as appConfig
}
from '../../config/appConfig'
import {
  UserLinkWidget
}
from '../index'
  // use for trip page, pass below: isTripPage = true, title(trip's title)
  //for user and trip 
const JumbotronMetaAreaWidget = ({
  isTripPage = false, isContact = true, title = '', user
}) => {
  console.log('inside JumbotronMetaAreaWidget', user)
  const {
    trippian, name, email, id, facebookId, googleId, picture = appConfig.defaultAvatar,
      location, mobile, slogan, website = '', averageRating
  } = user
  return (
    <div className="full-length-container">
        <div className="container">
            <div className="col-sm-12 col-md-8 col-md-offset-2">
                <div className="circle-image avatar">
                    <Link to={`trippian/${id}`}> <img src={picture} alt="" /></Link>
                </div>
                <div className="meta-info">
                    <div className="left">
                        {isTripPage && <h3>{title}</h3>}
                        {!isTripPage && <h3>{name}</h3>}

                        <UserLinkWidget {...user}/>
                        <StarRatingWidget stars={averageRating} />
                        <span className="text-intro">
                            {slogan}
                        </span>
                    </div>
                    {isContact && <div className="right"><ContactButtonWidget to={`trippian/${id}/contact`} name={name} /></div> }
                </div>
            </div>
        </div>
    </div>
  )
}

JumbotronMetaAreaWidget.displayName = 'JumbotronMetaAreaWidget'

export default JumbotronMetaAreaWidget
