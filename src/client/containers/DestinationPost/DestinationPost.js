import React, {
  Component, PropTypes
}
from 'react'
import {
  Link
}
from 'react-router'
import {
  JumbotronWidget, DestinationPostFormWidget
}
from '../../components/index'


import {
  postDestination
}
from '../../redux/apiIndex'


import store from '../../redux/store'
import {
  connect
}
from 'react-redux'

function mapStateToProps(state) {
  return {
    username: state.appState.get('username')
  }
}

@
connect(mapStateToProps)
export default class DestinationPost extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // demo for posting data and deleting data 
    // postDestination().then(data => console.log('posted', data))
    // deleteDestinationById(55).then(data => console.log('posted', data))
  }

  handleSubmit(data) {
    store.dispatch(postDestination(data))

    // const formData = store.getState().form.destinationPostForm
    // const email = formData.email.value
    // const firstName = formData.firstName.value
    // const lastName = formData.lastName.value
    // console.log('submitted', formData, email, firstName, lastName)
    // will do some aync call here 
  }

  render() {
    return (
      <div id="destination-post-page">
        <JumbotronWidget title="Post A Destination" subTitle="Lorem ipsum dolor sit."/>
        <div className="container main-content-container">
          <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
            <div className="pull-right">
              <Link className="btn btn-primary" to='admin/destination'>Manage Destinations</Link>
            </div>
            <h3>Post</h3>
            <DestinationPostFormWidget onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    )
  }
}
DestinationPost.propTypes = {
  // postDestination: PropTypes.func.isRequired
}

DestinationPost.displayName = 'DestinationPost Page'
