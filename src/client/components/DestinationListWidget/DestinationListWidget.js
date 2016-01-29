import React from 'react'
import {
  DestinationListItemWidget
}
from '../index'

//We need to add user profile picture to list, reference airbnb layout
var destinationList = [
  {
    "summary": "meet at 5 pm and go to sightglass",
    "netVote": 3,
    "totalVotes": 3,
    "destination": "San Francisco, CA",
    "details": "we are going to drink coffee",
    "title": "Go to sightglass",
    "price": 100,
    "id": 159
  },
  {
    "summary": "meet at 5 pm and go to sightglass",
    "netVote": 2,
    "totalVotes": 2,
    "destination": "San Francisco, CA",
    "details": "we are going to drink coffee",
    "title": "Go to sightglass",
    "price": 2000,
    "id": 158
  },
  {
    "summary": "meet at 5 pm and go to sightglass",
    "netVote": 1,
    "totalVotes": 1,
    "destination": "San Francisco, CA",
    "details": "we are going to drink coffee",
    "title": "Go to sightglass",
    "price": 100000,
    "id": 157
  },
  {
    "summary": "meet at 5 pm and go to sightglass",
    "netVote": 5,
    "totalVotes": 5,
    "destination": "San Francisco, CA",
    "details": "we are going to drink coffee",
    "title": "Go to sightglass",
    "price": 1,
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
