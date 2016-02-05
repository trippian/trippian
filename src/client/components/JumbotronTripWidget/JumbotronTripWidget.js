import React from 'react'
import {
  Link
}
from 'react-router'
import {
  photos as appConfig
}
from '../../config/appConfig'
import {
  JumbotronTitleWidget, ContactButtonWidget, StarRatingWidget, JumbotronMetaAreaWidget
}
from '../index'

/*
isTitled will show/hide the title area 
isNoContact will show/hide contact button 
isMetad: will show/hide the meta area (full-length-container)
 */

const JumbotronTripWidget = ({
  isTitled = true, user, title = '', subTitle = '', metaTitle = '', backgroundFeature
 = appConfig.defaultTripFeature
}) => {

  const styles = {
    backgroundImage: {
      backgroundImage: 'url(' + backgroundFeature + ')'
    }
  }
  console.log('--inside JumbotronTripWidget', user, metaTitle)
  return (
    <div className = "jumbotron jumbotron-trip-widget" style={styles.backgroundImage} > 
      {isTitled && <JumbotronTitleWidget title={title} subTitle={subTitle} />}

      {<JumbotronMetaAreaWidget isTripPage="true" title={metaTitle} user={user} />} 
    </div>
  )
}


JumbotronTripWidget.displayName = 'JumbotronTripWidget'

export default JumbotronTripWidget
