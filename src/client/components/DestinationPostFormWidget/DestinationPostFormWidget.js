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
          <input type="text" className="form-control" value="Beijing, China" placeholder="Paris..." {...name}/>
        </div>
        <div className="form-group">
          <label>Destination Description</label>
          <input type="text" className="form-control" value="a great place" placeholder="Awesome place...." {...description}/>
        </div>
        <div className="form-group">
          <label>Feature Image</label>
          <input type="url" className="form-control" value="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Beijing_montage_1.png/250px-Beijing_montage_1.png" placeholder="http://..." {...feature}/>
        </div>
        <div className="form-group">
          <label>Why Visit</label>
          <textarea name="whyVisit" className="form-control" className="form-control" rows="3" required="required" value="Beijing is the capital of the People's Republic of China and one of the most populous cities in the world." {...whyVisit}></textarea>
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
