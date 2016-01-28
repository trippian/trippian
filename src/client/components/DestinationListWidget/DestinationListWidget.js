import React from 'react'
import {
  DestinationListItemWidget
}
from '../index'


var destinationList = [
  {
    "summary": "meet at 5 pm and go to sightglass",
    "netVote": 0,
    "totalVotes": 0,
    "destination": "San Francisco, CA",
    "details": "we are going to drink coffee",
    "title": "Go to sightglass",
    "id": 159
  },
  {
    "summary": "meet at 5 pm and go to sightglass",
    "netVote": 0,
    "totalVotes": 0,
    "destination": "San Francisco, CA",
    "details": "we are going to drink coffee",
    "title": "Go to sightglass",
    "id": 158
  },
  {
    "summary": "meet at 5 pm and go to sightglass",
    "netVote": 0,
    "totalVotes": 0,
    "destination": "San Francisco, CA",
    "details": "we are going to drink coffee",
    "title": "Go to sightglass",
    "id": 157
  },
  {
    "summary": "meet at 5 pm and go to sightglass",
    "netVote": 0,
    "totalVotes": 0,
    "destination": "San Francisco, CA",
    "details": "we are going to drink coffee",
    "title": "Go to sightglass",
    "id": 156
  }
]

const DestinationListWidget = ({
  destinations = destinationList
}) => {
  return (
    <div className="popular-destinations section-body clearfix">
    { 
       destinations.map((destination, key) => (
         <DestinationListItemWidget key={key} {...destination} />
      ))
   }
    </div>
  )
}
DestinationListWidget.displayName = 'DestinationListWidget'

export default DestinationListWidget
