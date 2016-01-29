import React from 'react'
import {
  Link
}
from 'react-router'

import {
  ContactButtonWidget, StarRatingWidget, JumbotronMetaAreaWidget
}
from '../index'

const styles = {
  backgroundImage: {
    backgroundImage: 'url(http://lorempixel.com/800/400/city/)'
  }
}
const renderTitles = (title, subTitle) => {
  return (
    <div className = "container" >
      <div className="col-sm-12 col-md-8 col-md-offset-2 text-center">
        <h1>{title}</h1> 
        <p>{subTitle}</p>
      </div>
    </div>
  )
}

const renderMetaArea = (isNoContact) => {
  return (
    <div className="full-length-container">
        <div className="container">
            <div className="col-sm-12 col-md-8 col-md-offset-2">
                <div className="circle-image avatar">
                    <img src="http://lorempixel.com/200/200/people/" alt="" />
                </div>
                <div className="meta-info">
                    <div className="left">
                        <h2>John Smith</h2>
                        <StarRatingWidget rating="2" />
                        <span className="text-intro">
                            Paris, Sydney. Lorem ipsum
                        </span>
                    </div>
                    {isNoContact ?  null : (<div className="right"><ContactButtonWidget /></div>) }
                </div>
            </div>
        </div>
    </div>
  )
}

/*
isTitled will show/hide the title area 
isNoContact will show/hide contact button 
isMetad: will show/hide the meta area (full-length-container)
 */

const JumbotronTrippianWidget = ({
  isTitled = false, title = 'Contact', subTitle = 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    isMetad = false, isNoContact = false, name = 'name', picture = 'http://lorempixel.com/200/200/animals/', averageRating = '3', slogan = 'slogan', id = 0
}) => {

  const meta = {
    isNoContact: isNoContact,
    title: name,
    picture: picture,
    rating: averageRating,
    subTitle: slogan,
    titleLink: `trippian/${id}`,
    contact: `trippian/${id}/contact`
  }

  return (

    < div className = "jumbotron"
    style = {
      styles.backgroundImage
    } > {
      isTitled ? renderTitles(title, subTitle) : null
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
