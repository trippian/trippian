import React from 'react'
import {
  CarouselItem
}
from 'react-bootstrap'

const CarouselItemWidget = ({
  src = 'http://lorempixel.com/400/200/city/', title = '', subTitle = ''
}) => {
  console.log('---- inside carousel Item Widget', src)
  return (
    <CarouselItem>
    <img width={900} height={500} alt="900x500" src={src}/>
    <div className="carousel-caption">
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </CarouselItem>
  )
}


CarouselItemWidget.displayName = 'CarouselItemWidget'

export default CarouselItemWidget
