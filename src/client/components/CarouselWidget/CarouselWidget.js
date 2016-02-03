import React from 'react'
import {
  Carousel, CarouselItem
}
from 'react-bootstrap'
import {
  CarouselItemWidget
}
from '../index'

const imgs = ['http://lorempixel.com/400/200/animals/', 'http://lorempixel.com/400/200/animals/']

const CarouselWidget = ({
  dataList = imgs
}) => {
  return (
    <Carousel>
      {dataList.map((image, key)=> 
        <CarouselItem key={key}>
          <img width={900} height={500} alt="900x500" src={image}/>
          <div className="carousel-caption">
            <h3></h3>
            <p></p>
          </div>
        </CarouselItem>
       )}
    </Carousel>
  )
}


CarouselWidget.displayName = 'CarouselWidget'

export default CarouselWidget
