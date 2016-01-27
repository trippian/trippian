import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}
from '../../components/index'
import store from '../../redux/store'
import {
  connect
}
from 'react-redux'
import {
  getAdminDestinationById
}
from '../../redux/apiAdminIndex'

// at some stage, we'll cache the data, and update the store
// but for now, let's just get directly from remote 
function mapStateToProps(state) {
  return {
    destination: state.apiAdmin.get('currentDestination')
  }
}

// function renderDestinationValues (){
//   for (let i of this.props.destination){
//              return  <p> i </p>
//             }
// }
@
connect(mapStateToProps)
export default class AdminDestinationListItem extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const id = this.props.params.id
    console.log('will get destination by id', id)
    store.dispatch(getAdminDestinationById(id))
  }

  render() {
    const {
      destinationName, destinationDescription, destinationImage, whyVisit
    } = this.props.destination
    return (
      <div id="admin-destination-list-item-page">
        <h3> {destinationName}</h3>
        <h2>{destinationDescription}</h2>
        <img src={destinationImage} alt=""/>
        <p>{whyVisit}</p>
      </div>
    )
  }
}
AdminDestinationListItem.propTypes = {
  // name: PropTypes.string
}

AdminDestinationListItem.displayName = 'AdminDestinationListItem Page'
