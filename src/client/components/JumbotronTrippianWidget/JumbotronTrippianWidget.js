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
  isTitled = false, title = 'Contact', subTitle = 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    isMetad = false, isNoContact = false, metaTitle = 'metaTitle', backgroundFeature = appConfig.defaultTripFeature, picture = appConfig.defaultAvatar,
    averageRating = '3', slogan = 'slogan', id = 0
}) => {

  const meta = {
    isNoContact: isNoContact,
    title: metaTitle,
    picture: picture,
    rating: averageRating,
    subTitle: slogan,
    titleLink: `trippian/${id}`,
    contact: `trippian/${id}/contact`
  }
  const styles = {
    backgroundImage: {
      backgroundImage: 'url(' + backgroundFeature + ')'
    }
  }
  return ( < div className = "jumbotron"
    style = {
      styles.backgroundImage
    } > {
      isTitled && <JumbotronTitleWidget title={title} subTitle={subTitle} />
    }

    {
      isMetad && < JumbotronMetaAreaWidget {...meta
      }
      />
    } < /div>
  )
}


JumbotronTrippianWidget.displayName = 'JumbotronTrippianWidget'

export default JumbotronTrippianWidget
