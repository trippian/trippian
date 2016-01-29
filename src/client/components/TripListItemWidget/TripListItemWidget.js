import React from 'react'
import {
  Link
}
from 'react-router'

const TripListItemWidget = ({
  title, destination, summary, details, netVote = 100, feature = 'http://lorempixel.com/200/200/city/'
}) => {
  console.log('insideTripListItemWidget')
  return (
    <div className="trip-list-item row">
              <div className="col-xs-6 col-sm-3 col-md-3 col-xs-offset-3 col-sm-offset-0">
                  <img className="feature-image" src="http://lorempixel.com/200/200/nature/" alt="" />
              </div>
              <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7">
                  <div className="title-section">
                      <h4>{title}</h4>
                      <div className="sub-title">i
                          <span>Mission street</span>. By <a href="" title="">Sarah Johns</a>
                      </div>
                      <p>{summary}</p>
                  </div>
              </div>
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 vote">
                  <span className="total-votes"> {netVote} </span>
                  <div className="vote-buttons">
                      <button> <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span></button>
                      <button> <span className="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></button>
                      <div>
                      </div>
                  </div>
              </div>
          </div>
  )
}

TripListItemWidget.displayName = 'TripListItemWidget'

export default TripListItemWidget
