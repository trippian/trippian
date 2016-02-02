import React, {
  Component, PropTypes
}
from 'react'
import {
  reduxForm
}
from 'redux-form'
import {
  fileEnhance
}
from '../../hocs/fileEnhance'
import store from '../../redux/store'
import {
  setFiles
}
from '../../redux/actionCreators'

class DestinationPostFormWidget extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      isHOC: false
    })
  }


  handleSubmit(data) {
    console.log('******submitting in the form', this.props.files, this.props.isFileUploading)
    if (this.props.isFileUploading) {
      // TODO: set alert here 
    } else {
      // set files in the store so the store action can read it before fetching 
      store.dispatch(setFiles(this.props.files))
      this.props.handleSubmit(data)
        //TODO clear out the form and picture 
    }
  }
  render() {
    const {
      fields: {
        name, description, feature, whyVisit
      },
      handleSubmit,
      submitting,
      resetForm
    } = this.props

    return (
      <form onSubmit={handleSubmit} role="form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" value="Beijing, China" placeholder="Paris..." {...name}/>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="Description" className="form-control" className="form-control" rows="2" required="required" value="a great place" {...description}></textarea>
        </div>
        <div className="form-group">
          <label>Why Visit</label>
          <textarea name="whyVisit" className="form-control" className="form-control" rows="3" required="required" value="Beijing is the capital of the People's Republic of China and one of the most populous cities in the world." {...whyVisit}></textarea>
        </div>
        <div className="form-group">
          <label>Feature Image</label> <i className="text-muted">If this is empty, the first uploaded photo will be used as feature</i>
          <input type="url" className="form-control" value='' placeholder="http://..." {...feature}/>
        </div>
        <div className="pull-right">
          <button  disabled={this.props.isFileUploading || submitting} className={'btn ' + (this.props.isFileUploading ? 'disabled' : 'btn-success') } onClick={this.handleSubmit.bind(this)}>Submit</button> 
          <button type="button" className="btn btn-default" disabled={submitting} onClick={resetForm}> Clear Values</button>
        </div>
      </form>
    )
  }
}

DestinationPostFormWidget = reduxForm({
  form: 'destinationPostForm', // a unique name for this form
  fields: ['name', 'description', 'feature', 'whyVisit'] // all the fields in the form
})(DestinationPostFormWidget)

DestinationPostFormWidget.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}
DestinationPostFormWidget.displayName = 'DestinationPostFormWidget'

export default fileEnhance(DestinationPostFormWidget)
