import React, {
  Component
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

class DestinationPostFormWidget extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      isHOC: false
    })
  }
  handleSubmit(data) {
    console.log('******submitting in the form', this.props.files, this.props.isFileUploading)
    this.props.handleSubmit(data)
  }
  render() {
    const {
      fields: {
        name, description, feature, whyVisit
      },
      handleSubmit
    } = this.props

    return (
      <form onSubmit={handleSubmit} role="form">
        <div className="form-group">
          <label>Destination Name</label>
          <input type="text" className="form-control" placeholder="Paris..." {...name}/>
        </div>
        <div className="form-group">
          <label>Destination Description</label>
          <input type="text" className="form-control" placeholder="Awesome place...." {...description}/>
        </div>
        <div className="form-group">
          <label>Feature Image</label>
          <input type="url" className="form-control" placeholder="http://..." {...feature}/>
        </div>
        <div className="form-group">
          <label>Why Visit</label>
          <textarea name="whyVisit" className="form-control" className="form-control" rows="3" required="required" {...whyVisit}></textarea>
        </div>
        <button  disabled={this.props.isFileUploading} className={'btn ' + (this.props.isFileUploading ? 'disabled' : 'btn-success') } onClick={this.handleSubmit.bind(this)}>Submit</button> 
      </form>
    )
  }
}

DestinationPostFormWidget = reduxForm({
  form: 'destinationPostForm', // a unique name for this form
  fields: ['name', 'description', 'feature', 'whyVisit'] // all the fields in the form
})(DestinationPostFormWidget)


DestinationPostFormWidget.displayName = 'DestinationPostFormWidget'

export default fileEnhance(DestinationPostFormWidget)
