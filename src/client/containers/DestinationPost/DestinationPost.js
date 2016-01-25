import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget, DestinationPostFormWidget
}
from '../../components/index'

import store from '../../redux/store'
export default class DestinationPost extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit() {
    const formData = store.getState().form.destinationPostForm
    const email = formData.email.value
    const firstName = formData.firstName.value
    const lastName = formData.lastName.value
    console.log('submitted', formData, email, firstName, lastName)
      // will do some aync call here 
  }

  render() {
    return (
      <div id="destination-post-page">
        <JumbotronWidget title="Post A Destination" subTitle="Lorem ipsum dolor sit."/>
        <div className="container main-content-container">
          <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
            <h3>Post</h3>
            <DestinationPostFormWidget onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    )
  }
}
DestinationPost.propTypes = {
  name: PropTypes.string
}

DestinationPost.displayName = 'DestinationPost Page'
