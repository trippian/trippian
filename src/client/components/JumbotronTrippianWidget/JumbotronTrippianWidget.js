import React from 'react'

const styles = {
  backgroundImage: {
    backgroundImage: 'url(http://lorempixel.com/800/400/city/)'
  }
}
const JumbotronTrippianWidget = () => {
  return ( < div className = "jumbotron"
    style = {
      styles.backgroundImage
    } >
    <div className="full-length-container">
              <div className="container">
                  <div className="col-sm-12 col-md-8 col-md-offset-2">
                      <div className="circle-image avatar">
                          <img src="http://lorempixel.com/200/200/people/" alt="" />
                      </div>
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
                              <a className="btn btn-primary btn-lg">Contact</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div> < /div>
  )
}


JumbotronTrippianWidget.displayName = 'JumbotronTrippianWidget'

export default JumbotronTrippianWidget
