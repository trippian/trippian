import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget, CircleImageWidget
}
from '../../components/index'
import {
  FormattedMessage, FormattedDate
, FormattedNumber, FormattedTime, FormattedHTMLMessage, FormattedPlural
}
from 'react-intl'


let team =  [
  {
    "name" : "Joe Lagasse",
    "location": "San Francisco",
    "image" : "http://lorempixel.com/400/200/animals/",
    "about" : "I eat a lot of Qdoba."
  }, {
    "name" : "Audrey Li",
    "location": "San Francisco",
    "image" : "http://lorempixel.com/400/200/animals/",
    "about" : "I dream that one day I will win a game of Blokus."
  }, {
    "name" : "Yale Yuen",
    "location": "San Francisco",
    "image" : "http://lorempixel.com/400/200/animals/",
    "about" : "I'm basically married. Elliot is my side piece."
  }, {
    "name" : "Elliot Chi",
    "location": "San Francisco",
    "image" : "http://lorempixel.com/400/200/animals/",
    "about" : "I enjoy watching the Warriors and cheering for Steph Curry. I have a man crush on him."
  }
]




export default class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div id="about-page">
        <JumbotronWidget title="About" subTitle="Lorem ipsum dolor sit."/>
          <div className="container main-content-container">
            <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
              <FormattedMessage
                  id="about.title"
                  description="this is a formated title message in about page"
                  defaultMessage="About Page " />


              <div className="col-xs-6 col-sm-2 col-md-2 col-xs-offset-3 col-sm-offset-0">
                <CircleImageWidget/>
              </div>
              <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                <div className="title-section">
                    <h4>Name</h4>
                    <span>Place</span>
                    <p>About</p>
                </div>
              </div>

              <div className="col-xs-6 col-sm-2 col-md-2 col-xs-offset-3 col-sm-offset-0">
                <CircleImageWidget/>
              </div>
              <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                <div className="title-section">
                    <h4>Name</h4>
                    <span>Place</span>
                    <p>About</p>
                </div>
              </div>

              <div className="col-xs-6 col-sm-2 col-md-2 col-xs-offset-3 col-sm-offset-0">
                <CircleImageWidget/>
              </div>
              <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                <div className="title-section">
                    <h4>Name</h4>
                    <span>Place</span>
                    <p>About</p>
                </div>
              </div>

              <div className="col-xs-6 col-sm-2 col-md-2 col-xs-offset-3 col-sm-offset-0">
                <CircleImageWidget/>
              </div>
              <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                <div className="title-section">
                    <h4>Name</h4>
                    <span>Place</span>
                    <p>About</p>
                </div>
              </div>







            </div>
          </div>
        </div>
      </div>
    )
  }
}
About.propTypes = {
  name: PropTypes.string
}

About.displayName = 'About Page'
