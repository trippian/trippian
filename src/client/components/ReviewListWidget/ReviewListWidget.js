import React from 'react'

import {
  ReviewListItemWidget
}
from '../index'

const ReviewListWidget = ({
  name = 'ReviewListWidget'
}) => {
  return (
    <div className="section-body review-list">
        <ReviewListItemWidget />
        <ReviewListItemWidget />
        <ReviewListItemWidget />
        <ReviewListItemWidget />
        <ReviewListItemWidget />
    </div>
  )
}
ReviewListWidget.displayName = 'ReviewListWidget'

export default ReviewListWidget
