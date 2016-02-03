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
  setFiles, setTrip
}
from '../../redux/actionCreators'

import {
  AutoSuggestBoxWidget
}
from '../index'

class TripPostFormWidget extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      isHOC: false,
      isFormSubmitted: store.getState().appState.get('isFormSubmitted')
    })
  }

  componentDidReceiveProps(newProps) {
    console.log('******* inside post form, recieving new props')
  }
  handleSubmit(data) {
    console.log('******submitting in the form', this.props.files, this.props.isFileUploading)
    if (this.props.isFileUploading) {
      // TODO: set alert here 
    } else {
      // set files in the store so the store action can read it before fetching 
      store.dispatch(setFiles(this.props.files))
      this.props.handleSubmit(data)

      //TODO: clear out the form and picture in callee 
    }
  }

  render() {
    const {
      fields: {
        destination, title, summary, details, feature, album
      },
      handleSubmit
    } = this.props

    return (
      <form onSubmit={handleSubmit} role="form">
        <div className="form-group row">
          <div className="pull-left">
            <label>Destination</label>
            <AutoSuggestBoxWidget />
          </div>
        </div>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" placeholder="Awesome place...." value="A great place to visit" {...title}/>
        </div>
        <div className="form-group">
          <label>Summary</label>
          <textarea name="whyVisit" className="form-control" className="form-control" rows="3" required="required"  value="Beijing is the capital of the People's Republic of China and one of the most populous cities in the world." {...summary}></textarea>
        </div>
        <div className="form-group">
          <label>Detail</label>
          <textarea name="whyVisit" className="form-control" className="form-control" rows="3" value="Beijing is the capital of the People's Republic of China and one of the most populous cities in the world." {...details}></textarea>
        </div>
        <div className="form-group">
          <label>Feature Image</label>
          <input type="url" className="form-control" placeholder="http://..." value="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Beijing_montage_1.png/250px-Beijing_montage_1.png" {...feature}/>
        </div>
        <div className="form-group">
          <label>Upload photos</label>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    )
  }
}


TripPostFormWidget = reduxForm({
    form: 'tripPostForm', // a unique name for this form
    fields: ['destination', 'title', 'summary', 'details', 'feature', 'album']
  },
  state => ({ // mapStateToProps
    initialValues: state.apiTrippian.get('trip') // will pull state into form's initialValues
  })
)(TripPostFormWidget)



TripPostFormWidget.displayName = 'TripPostFormWidget'

export default FileEnhance(TripPostFormWidget)
