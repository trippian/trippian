import log from '../../log'
import React from 'react'
import {
  ReviewListItemWidget, NoContentWidget
}
from '../index'

const ReviewListWidget = ({
  dataList = []
}) => {
  return (
    <div className="review-list clearfix">
        {dataList.length === 0 && 
          <NoContentWidget message="There is no review" />
        }
        {dataList.map((review, key) =>  
          <ReviewListItemWidget key={key} review={review} />
        )}
    </div>
  )
}
ReviewListWidget.displayName = 'ReviewListWidget'

export default ReviewListWidget
