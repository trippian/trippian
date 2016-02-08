import log from '../../log'
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
  getAdminTrippianById
}
from '../../redux/apiAdminIndex'

function mapStateToProps(state) {
  return {
    trippian: state.apiAdmin.get('currentTrippian')
  }
}

@
connect(mapStateToProps)
export default class AdminTrippianListItem extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const id = this.props.params.id
    log.info('will get destination by id', id)
    store.dispatch(getAdminTrippianById(id))
  }

  render() {
    log.info('***insider render', this.props.trippian)
    const {
      name, trippian, averageRating, email, facebookId, picture
    } = this.props.trippian
    return (
      <div id="admin-destination-list-item-page">
        <h3> {name}</h3>
        <b>Is trippian? {trippian ? 'Yes' : null} </b>
        <p><b>facebookId:</b> {facebookId}</p>
        <p><b>email:</b> {email}</p>
        <img src={picture} alt=""/>
      </div>
    )
  }
}
AdminTrippianListItem.propTypes = {
  // name: PropTypes.string
}

AdminTrippianListItem.displayName = 'AdminTrippianListItem Page'
