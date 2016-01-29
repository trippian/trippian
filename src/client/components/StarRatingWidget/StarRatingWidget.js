import React from 'react'

let getStars = function (starNum) {
  let starsHTML = []
  for (let i = 0; i < starNum; i++) {
    starsHTML.push(<i className="fa fa-star" key={i}></i>)
  }
  return starsHTML
}

const StarRatingWidget = ({
  stars = 2
}) => {
  const noStars = stars === 0

  return (
    <span className="star-rating">
      {noStars ? <span>This is no rating yet</span> : getStars(stars)}
    </span>
  )
}
StarRatingWidget.displayName = 'StarRatingWidget'

export default StarRatingWidget
