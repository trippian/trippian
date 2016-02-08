import React from 'react'
import {
  Carousel, CarouselItem
}
from 'react-bootstrap'

import {
  CarouselWidget as appConfig
}
from '../../config/appConfig'

// can handle two kinds of inputs 
// ['imageURL', 'imageURL'] or 
// [{src: 'imageURL', caption: '...', description: '...' }, {src: 'imageURL', caption: '...', description: '...' }]

const CarouselWidget = ({
  dataList = appConfig.images, captionTitle = appConfig.captionTitle, captionContent = appConfig.captionContent
}) => {
  return (
    <Carousel>
      {dataList.map((image, key)=> 
        <CarouselItem key={key}>
          <img width={appConfig.imageWidth} height={appConfig.imageHeight} alt="appConfig.imageAlt" src={image.src || image}/>
          <div className="carousel-caption">
            <h3>{image.caption || captionTitle}</h3>
            <p>{image.description || captionContent}</p>
          </div>
        </CarouselItem>
       )}
    </Carousel>
  )
}


CarouselWidget.displayName = 'CarouselWidget'

export default CarouselWidget
