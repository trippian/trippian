import React, {
  Component, PropTypes
}
from 'react'
import {
  JumbotronWidget
}
from '../../components/index'

export default class DestinationSearchResults extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="destination-search-results-page">
       <JumbotronWidget title="Search Result" subTitle="There are 30 results in 'Paris'"/>

       <div className="container main-content-container">
         <div className="col-sm-12 col-md-10 col-md-offset-1 content-container">
             <h2>DestinationSearchResults</h2>
         </div>
       </div>
     </div>
    )
  }
}
DestinationSearchResults.propTypes = {
  name: PropTypes.string
}
