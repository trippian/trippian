import React from 'react'
import {
  ReviewListItemWidget
}
from '../index'

var reviewList = [{
    "name": 'Yale Yuen',
    "profilePicture": 'http://lorempixel.com/400/200/animals/',
    "rating": 1,
    "review": 'He servicable defense but no potential. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus repellat nulla molestias est blanditiis magni doloremque, aut voluptatibus quia ipsum.'
  },

  {
    "name": 'Josh Smith',
    "profilePicture": 'http://lorempixel.com/400/200/animals/',
    "rating": 2,
    "review": 'Sick baller. Decent handles for a 4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, itaque.'
  },

  {
    "name": 'Steph Curry',
    "profilePicture": 'http://lorempixel.com/400/200/animals/',
    "rating": 1,
    "review": 'Garbage player says Elliot Garbage player says ElliotGarbage player says Elliot.'
  }
]

const ReviewListWidget = ({
  dataList = reviewList
}) => {
  return (
    <div className="review-list clearfix">
        {dataList.map((review, key) =>  
          <ReviewListItemWidget key={key} {...review} />
        )}
    </div>
  )
}
ReviewListWidget.displayName = 'ReviewListWidget'

export default ReviewListWidget
