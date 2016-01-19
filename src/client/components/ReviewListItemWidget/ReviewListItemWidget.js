import React from 'react'

const ReviewListItemWidget = ({
  name = 'ReviewListItemWidget'
}) => {
  return (
    <div className="review-list-item">
        <div className="col-xs-12 col-sm-2 col-md-2">
            <div className="circle-image">
                <img src="http://lorempixel.com/200/200/people/" alt="" />
            </div>
        </div>
        <div className="col-xs-12 col-sm-10 col-md-10 text-expandable">
            <h4><a href="#" title="">James Chang</a></h4>
            <div className="meta-info">
                <span className="star-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>                                    
        </span> 5d ago
            </div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus odio eveniet sit consequuntur minus labore, error fugiat expedita praesentium recusandae perspiciatis odit sunt voluptatem porro
        </div>
    </div>
  )
}
ReviewListItemWidget.displayName = 'ReviewListItemWidget'

export default ReviewListItemWidget
