import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget, DestinationListWidget, TrippianListWidget
}
from '../../components/index'

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
                         <p> Lorem Again Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, ad! <a href="" title="more">more</a></p>
                     </div>
                    <DestinationListWidget name="hello world" />
                  </div>

                 <div className="section">
                   <div className="section-header text-center">
                       <h2>Popular Trippians</h2>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, ad! <a href="" title="more">more</a></p>
                   </div>
                   <TrippianListWidget />

                 </div>
             </div>
         </div>
        </div>
    )
  }
}

Home.displayName = 'Home'
