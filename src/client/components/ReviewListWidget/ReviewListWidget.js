import React from 'react'
import {
  ReviewListItemWidget
}
from '../index'

var reviewList = [{
    "name": 'Yale Yuen',
    "profilePicture": 'http://lorempixel.com/400/200/animals/',
    "rating": 1,
    "review": 'He servicable defense but no potential.'
  },

  {
    "name": 'Josh Smith',
    "profilePicture": 'http://lorempixel.com/400/200/animals/',
    "rating": 2,
    "review": 'Sick baller. Decent handles for a 4'
  },

  {
    "name": 'Steph Curry',
    "profilePicture": 'http://lorempixel.com/400/200/animals/',
    "rating": 1,
    "review": 'Garbage player says Elliot.'
  }
]

const ReviewListWidget = ({
  reviews = reviewList
}) => {
  return (
    <div className="section-body review-list">
        {
          reviews.map((review,key) => 
            <ReviewListItemWidget key={key} {...review} />
          )
        }
    </div>
  )
}
ReviewListWidget.displayName = 'ReviewListWidget'

export default ReviewListWidget
