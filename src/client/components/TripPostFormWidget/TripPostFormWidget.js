import log from '../../log'
import React, {
  Component
}
from 'react'
import {
  reduxForm
}
from 'redux-form'
import {
  FileEnhance
}
from '../../hocs/FileEnhance'
import store from '../../redux/store'
import {
  setTrip
}
from '../../redux/actionCreators'

import {
  AutoSuggestBoxWidget
}
from '../index'
import {
  trip as initalTripData
}
from '../../redux/initalState'
import {
  TripPostFormWidget as appConfig
}
from '../../config/appConfig'

class TripPostFormWidget extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      isHOC: false,
      isFormSubmitted: store.getState().appState.get('isFormSubmitted')
    })
  }

  componentDidReceiveProps(newProps) {
    log.info('******* inside post form, recieving new props')
  }
  handleSubmit(data) {
    log.info('******submitting in the form', this.props.files, this.props.isFileUploading)
    if (this.props.isFileUploading) {
      // TODO: set alert here 
    } else {
      this.props.handleSubmit(data)
        //TODO: clear out the form and picture in callee 
    }
  }

  render() {
    const {
      fields: {
        destination, title, summary, details, feature, thumbnail, album
      },
      handleSubmit,
      submitting,
      resetForm,
      load

    } = this.props
    const showAdminButtons = store.getState().appState.get('showAdminButtons')

    // TODO: dummy data here, remove later 
    let data = {
      netVote: 0,
      totalVotes: 0,
      destination: 'New York, NY, United States',
      title: 'Awesome trip to New York',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, architecto.',
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa a dolor, sunt odio consectetur quis animi sequi inventore commodi unde!',
      feature: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/NYC_Montage_2014_4_-_Jleon.jpg/295px-NYC_Montage_2014_4_-_Jleon.jpg',
      album: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Lower_Manhattan_from_Jersey_City_November_2014_panorama_3.jpg/1100px-Lower_Manhattan_from_Jersey_City_November_2014_panorama_3.jpg']
    }
    return (
      <form onSubmit={handleSubmit} role="form">
        <div className="row padding-row">
            <div className="pull-left">
              <label>{appConfig.labels.destination}</label>
              <AutoSuggestBoxWidget />
            </div>
        </div>
        <div className="form-group">
          <label>{appConfig.labels.title}</label>
          <input type="text" className="form-control" placeholder="Awesome place...." value="A great place to visit" {...title}/>
        </div>
        <div className="form-group">
          <label>{appConfig.labels.summary}</label>
          <textarea name="whyVisit" className="form-control" className="form-control" rows="3" required="required"  {...summary}></textarea>
        </div>
        <div className="form-group">
          <label>{appConfig.labels.details}</label>
          <textarea name="whyVisit" className="form-control" className="form-control" rows="3" {...details}></textarea>
        </div>
        <div className="form-group">
          <label>{appConfig.labels.thumbnail}</label> 
          <input type="url" className="form-control" value='' placeholder="http://..." {...thumbnail}/>
        </div>

        <div className="form-group">
          <label>{appConfig.labels.feature}</label>
          <input type="url" className="form-control" placeholder="http://..." value="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Beijing_montage_1.png/250px-Beijing_montage_1.png" {...feature}/>
        </div>
        <div className="form-group">
          <label>{appConfig.labels.album}</label>
        </div>
        <div className="pull-right">
          {showAdminButtons && <button type="button" className="btn btn-default" onClick={() => load(data)}>Load Dummy Data</button>}
          {showAdminButtons && <button type="button" className="btn btn-default" disabled={submitting} onClick={()=> load(initalTripData)} > Clear Values</button> }
          <button  disabled={this.props.isFileUploading || submitting} className={'btn ' + (this.props.isFileUploading ? 'disabled' : 'btn-success') } onClick={this.handleSubmit.bind(this)}>Submit</button> 
        </div>
      </form>
    )
  }
}

TripPostFormWidget = reduxForm({
    form: 'tripPostForm', // a unique name for this form
    fields: ['destination', 'title', 'summary', 'details', 'feature', 'thumbnail', 'album']
  },
  state => ({ // mapStateToProps
    initialValues: state.apiTrippian.get('trip') // will pull state into form's initialValues
  }), {
    load: setTrip
  })(TripPostFormWidget)



TripPostFormWidget.displayName = 'TripPostFormWidget'

export default FileEnhance(TripPostFormWidget)
