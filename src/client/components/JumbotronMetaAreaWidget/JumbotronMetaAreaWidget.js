import React from 'react'
import {
  Link
}
from 'react-router'
import {
  ContactButtonWidget, StarRatingWidget
}
from '../index'


const JumbotronMetaAreaWidget = ({
  isNoContact, title, titleLink, picture, rating, subTitle, contact
}) => {
  return (
    <div className="full-length-container">
        <div className="container">
            <div className="col-sm-12 col-md-8 col-md-offset-2">
                <div className="circle-image avatar">
                    <Link to={titleLink}> <img src={picture} alt="" /></Link>
                </div>
                <div className="meta-info">
                    <div className="left">
                        <h2><Link to={titleLink}> {title} </Link></h2>
                        <StarRatingWidget stars={rating} />
                        <span className="text-intro">
                            {subTitle}
                        </span>
                    </div>
                    {isNoContact ?  null : (<div className="right"><ContactButtonWidget to={contact} /></div>) }
                </div>
            </div>
        </div>
    </div>
  )
}

JumbotronMetaAreaWidget.displayName = 'JumbotronMetaAreaWidget'

export default JumbotronMetaAreaWidget
