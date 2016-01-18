import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}
from '../../components/index'


const styles = {
  backgroundImage: {
    backgroundImage: 'url(http://lorempixel.com/800/400/city/)'
  }
}
export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="home-page">
               <JumbotronWidget/> 
                 <div className="container main-content-container">
                     <div className="col-sm-12 col-md-12 content-container">
                         <div className="section">
                             <div className="content-container-header text-center section-header">
                                 <h2>Popular Destinations</h2>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, ad! <a href="" title="more">more</a></p>
                             </div>
                             <div className="popular-destinations section-body clearfix">
                                 <div className="col-xs-12 col-sm-6 col-md-4 popular-destinations-item
     ">
                                     <a href="#" className="thumbnail text-center" style = {
          styles.backgroundImage
        }>
                                         <span>Sydney</span>
                                     </a>
                                 </div>
                                 <div className="col-xs-12 col-sm-6 col-md-4 popular-destinations-item
                             ">
                                     <a href="#" className="thumbnail text-center" style = {
          styles.backgroundImage
        }>
                                         <span>Sydney</span>
                                     </a>
                                 </div>
                                 <div className="col-xs-12 col-sm-6 col-md-4 popular-destinations-item
                                                     ">
                                     <a href="#" className="thumbnail text-center" style = {
          styles.backgroundImage
        }>
                                         <span>Sydney</span>
                                     </a>
                                 </div>
                                 <div className="col-xs-12 col-sm-6 col-md-4 popular-destinations-item
                                                                             ">
                                     <a href="#" className="thumbnail text-center" style = {
          styles.backgroundImage
        }>
                                         <span>Sydney</span>
                                     </a>
                                 </div>
                                 <div className="col-xs-12 col-sm-6 col-md-4 popular-destinations-item
                             ">
                                     <a href="#" className="thumbnail text-center" style = {
          styles.backgroundImage
        }>
                                         <span>Sydney</span>
                                     </a>
                                 </div>
                                 <div className="col-xs-12 col-sm-6 col-md-4 popular-destinations-item
                                                     ">
                                     <a href="#" className="thumbnail text-center" style = {
          styles.backgroundImage
        }>
                                         <span>Sydney</span>
                                     </a>
                                 </div>
                             </div>
                         </div>
                         <div className="section">
                             <div className="section-header text-center">
                                 <h2>Popular Trippians</h2>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, ad! <a href="" title="more">more</a></p>
                             </div>
                             <div className="popular-trippians section-body clearfix">
                                 <div className="popular-trippians-item text-center">
                                     <div className="circle-image">
                                         <img src="http://lorempixel.com/200/200/people/" alt="" />
                                     </div>
                                     <h4>Amanda . Sydney</h4>
                                 </div>
                                 <div className="popular-trippians-item text-center">
                                     <div className="circle-image">
                                         <img src="http://lorempixel.com/200/200/people/" alt="" />
                                     </div>
                                     <h4>Amanda . Sydney</h4>
                                 </div>
                                 <div className="popular-trippians-item text-center">
                                     <div className="circle-image">
                                         <img src="http://lorempixel.com/200/200/people/" alt="" />
                                     </div>
                                     <h4>Amanda . Sydney</h4>
                                 </div>
                                 <div className="popular-trippians-item text-center">
                                     <div className="circle-image">
                                         <img src="http://lorempixel.com/200/200/people/" alt="" />
                                     </div>
                                     <h4>Amanda . Sydney</h4>
                                 </div>
                                 <div className="popular-trippians-item text-center">
                                     <div className="circle-image">
                                         <img src="http://lorempixel.com/200/200/people/" alt="" />
                                     </div>
                                     <h4>Amanda . Sydney</h4>
                                 </div>
                                 <div className="popular-trippians-item text-center">
                                     <div className="circle-image">
                                         <img src="http://lorempixel.com/200/200/people/" alt="" />
                                     </div>
                                     <h4>Amanda . Sydney</h4>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 </div>
    )
  }
}

Home.displayName = 'Home'
