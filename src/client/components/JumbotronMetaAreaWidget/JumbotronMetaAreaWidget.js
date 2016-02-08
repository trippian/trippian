import log from '../../log'
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
  log.info('inside JumbotronMetaAreaWidget', user)
  const {
    trippian, name, email, id, facebookId, googleId, picture = appConfig.defaultAvatar,
      location, mobile, slogan, website = '', averageRating
  } = user
  return (
    <div className="full-length-container jumbotron-meta-area-widget">
        <div className="container">
            <div className="col-sm-12 col-md-8 col-md-offset-2">
                <div className="circle-image avatar col-sm-3 col-md-3">
                    <Link to={`trippian/${id}`}> <img src={picture} alt="" /></Link>
                </div>
                <div className="meta-info  meta-info-right col-sm-8 col-md-8">
                    <div className="col-sm-9 col-md-9">
                        {isTripPage && <h3>{title}</h3>}
                        {!isTripPage && <h3>{name}</h3>}

                        <UserLinkWidget {...user}/>
                        <span className="text-intro">
                            {slogan}
                        </span>
                        <StarRatingWidget stars={averageRating} />
                    </div>
                    {isContact && <div className="col-sm-3 col-md-3"><ContactButtonWidget to={`trippian/${id}/contact`} name={name} /></div> }
                </div>
            </div>
        </div>
    </div>
  )
}

JumbotronMetaAreaWidget.displayName = 'JumbotronMetaAreaWidget'

export default JumbotronMetaAreaWidget
