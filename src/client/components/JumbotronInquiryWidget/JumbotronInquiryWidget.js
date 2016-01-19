import React from 'react'
import {
  Link
}
from 'react-router'

const styles = {
  backgroundImage: {
    backgroundImage: 'url(http://lorempixel.com/800/400/city/)'
  }
}
const JumbotronInquiryWidget = ({
    title = 'Contact', subTitle = 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
  }) => {
    return ( < div className = "jumbotron"
        style = {
          styles.backgroundImage
        } >

        <div className = "container" >
          <div className="col-sm-12 col-md-8 col-md-offset-2 text-center">

            <h1>{title}</h1> 
            <p>{subTitle}</p>
          </div>
        < /div> 
        <div className="full-length-container">
              <div className="container">
                  <div className="col-sm-12 col-md-8 col-md-offset-2">
                      <Link to='trippian/123'>
                        <div className="circle-image avatar">
                            <img src="http://lorempixel.com/200/200/people/" alt="" />
                        </div>
                      </Link>
                     

                      <div className="meta-info">
                          <div className="left">
                              <h2>John Smith</h2>
                              <span className="star-rating">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                              </span>
                              <span className="text-intro">
                                  Paris, Sydney. Lorem ipsum
                              </span>
                          </div>
                          <div className="right">

                          </div>
                      </div>
                  </div>
              </div>
          </div> < /div>
  )
}


JumbotronInquiryWidget.displayName = 'JumbotronInquiryWidget'

export default JumbotronInquiryWidget
