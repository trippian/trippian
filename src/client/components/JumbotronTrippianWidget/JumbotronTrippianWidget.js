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

const JumbotronTrippianWidget = ({
  isTitled = true, user, title = '', subTitle = '', metaTitle = '', isTripPage = true, backgroundFeature = appConfig.defaultTripFeature
}) => {

  const styles = {
    backgroundImage: {
      backgroundImage: 'url(' + backgroundFeature + ')'
    }
  }
  console.log('--inside JumbotronTrippianWidget', user, metaTitle)
  return (
    <div className = "jumbotron jumbotron-trip-widget" style={styles.backgroundImage} > 
      {isTitled && <JumbotronTitleWidget title={title} subTitle={subTitle} />}

      {<JumbotronMetaAreaWidget isTripPage="true" title={metaTitle} user={user} />} 
    </div>
  )
}


JumbotronTrippianWidget.displayName = 'JumbotronTrippianWidget'

export default JumbotronTrippianWidget
