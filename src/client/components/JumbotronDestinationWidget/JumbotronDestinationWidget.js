import React from 'react'

const styles = {
  backgroundImage: {
    backgroundImage: 'url(http://lorempixel.com/800/400/city/)'
  }
}
const JumbotronDestinationWidget = () => {
  return ( < div className = "jumbotron"
    style = {
      styles.backgroundImage
    } >
    <div className="full-length-container">
        <div className="container">
          <div className="col-sm-12 col-md-8 col-md-offset-2">
              <div className="meta-info">
                  <h2>San Francisco</h2>
                  <div className="text-intro">
                      <a href="#" title=""> 349 trips </a>
                      <a href="#" title=""> 109 locations</a>
                      <span className="star-rating">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                          </span>
                  </div>
              </div>
          </div>  
        </div>
      </div> < /div>
  )
}


JumbotronDestinationWidget.displayName = 'JumbotronDestinationWidget'

export default JumbotronDestinationWidget
