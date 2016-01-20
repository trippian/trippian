import React from 'react'

let getStars = function(starNum){
  let starsHTML = [];
  for (var i = 0; i < starNum; i++) {
    starsHTML.push(<i className="fa fa-star" key={i}></i>);
  }
  return starsHTML
}

const StarRatingWidget = ({
  stars = 2
}) => {
  return (
    <span className="star-rating">
      {getStars(stars)}
    </span>
  )
}
StarRatingWidget.displayName = 'StarRatingWidget'

export default StarRatingWidget
