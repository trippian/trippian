import React from 'react'
import {
  Link
}
from 'react-router'
import {
  CircleImageWidget, ContactButtonWidget
}
from '../index'

const TrippianListItemWidget = ({
  name = 'Amanda . Sydney'
}) => {
  return (
    <div className="trippian-list-item row">
        <div className="col-xs-6 col-sm-2 col-md-2 col-xs-offset-3 col-sm-offset-0">
            <CircleImageWidget />
        </div>
        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
            <div className="title-section">
                <h4>Sarah Johns</h4>
                <span>Sydney, Paris, New York</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur debitis soluta dolor ratione veniam alias sapiente dolore ullam. Error, molestiae nesciunt. Praesentium iste deserunt nemo.</p>
            </div>
        </div>
        <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
            <span className="star-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </span>
          <ContactButtonWidget />
        </div>
    </div>
  )
}
TrippianListItemWidget
  .displayName = 'TrippianListItemWidget'

export default TrippianListItemWidget
