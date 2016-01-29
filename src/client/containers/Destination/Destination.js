import React, {
  Component, PropTypes
}
from 'react'
import {
  JumbotronDestinationWidget
}
from '../../components/index'
import store from '../../redux/store'
import {
  connect
}
from 'react-redux'
import {
  getDestinationById
}
from '../../redux/apiIndex'



const popTrippianTitle = 'popular Trippians'
const popTrippianSubTitle = 'Lorem ipsum dolor sit.'

function mapStateToProps(state) {
  return {
    destination: state.apiTrippian.get('destination')
  }
}

@
connect(mapStateToProps)
export default class Destination extends Component {
  constructor(props) {
    super(props)
    console.log('inside', this.props)
  }

  componentDidMount() {
    const id = this.props.params.id
    console.log('will get destination by id', id)
    store.dispatch(getDestinationById(id))
  }

  render() {
    console.log('..inside destination render', this.props.destination)
    return (
      <div id="destination-page">
        <JumbotronDestinationWidget isMetad {...this.props.destination}/>
        <div className="container main-content-container">
          <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
              {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
Destination.propTypes = {
  destination: PropTypes.object,
  name: PropTypes.string
}


Destination.displayName = 'Destination Page'
