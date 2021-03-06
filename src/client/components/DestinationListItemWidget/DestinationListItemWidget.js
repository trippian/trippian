import log from '../../log'
import React from 'react'
import {
  Link
}
from 'react-router'
import {
  ImageLoaderWidget
}
from '../index'


const DestinationListItemWidget = ({
  name, id, feature, thumbnail
}) => {
  const photo = thumbnail ? thumbnail : feature
  const styles = {
    backgroundImage: {
      backgroundImage: `url(${photo})`
    }
  }

  //TODO: speed up loading, ImageLoaderWidget's style doesn't match, disable it for now
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 popular-destinations-item">  
      <Link to={`destination/${id}`} className="thumbnail text-center" style = {
          styles.backgroundImage
          }>
         <span>{name}</span> 
      </Link>
    </div>
  )
}

DestinationListItemWidget.displayName = 'DestinationListItemWidget'

export default DestinationListItemWidget
// <div className="col-xs-12 col-sm-6 col-md-4 popular-destinations-item">  

//     <Link to={`destination/${id}`} className="thumbnail text-center">
//         <ImageLoaderWidget src={feature} />
//        <span>{name}</span> 
//     </Link>
//   </div>
