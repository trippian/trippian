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
  destinationPostPage as appConfig
}
from '../../config/appConfig'

import {
  postDestination
}
from '../../redux/apiIndex'


import store from '../../redux/store'
import {
  connect
}
from 'react-redux'
import {
  Alert
}
from 'react-bootstrap'

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
    this.state = {
      alert: {
        type: 'danger',
        title: '',
        message: ''
      }
    }
  }

  componentDidMount() {
    // demo for posting data and deleting data 
    // postDestination().then(data => console.log('posted', data))
    // deleteDestinationById(55).then(data => console.log('posted', data))
  }

  handleSubmit(data) {
    console.log('posting data from form', data)
    store.dispatch(postDestination(data))
    this.setAlert('success', 'Successfully submitted data', `${data.destinationName} ${data.destinationDescription}`)
  }
  setAlert(type = 'success', title = '', message = '') {
    this.setState({
      alert: {
        type: type,
        title: title,
        message: message
      }
    })
  }

  handleAlertDismiss() {
    this.setAlert()
  }

  render() {
    const {
      type, title, message
    } = this.state.alert

    return (
      <div id="destination-post-page">
        <JumbotronWidget title={appConfig.title} subTitle={appConfig.subTitle}/>
        <div className="container main-content-container">
          <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
            {title !== '' && 
              <Alert bsStyle={type} dismissAfter={3000} onDismiss={this.handleAlertDismiss.bind(this)}>
                <h4>{title}</h4>
                <p>{message}</p>
              </Alert>
            }
            <div className="pull-right">
              <Link className="btn btn-primary" to='admin/destination'>Manage Destinations</Link>
            </div>
            <h3>{appConfig.formTitle}</h3>
            <DestinationPostFormWidget onSubmit={this.handleSubmit.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
}
DestinationPost.propTypes = {
  postDestination: PropTypes.func.isRequired
}

DestinationPost.displayName = 'DestinationPost Page'
