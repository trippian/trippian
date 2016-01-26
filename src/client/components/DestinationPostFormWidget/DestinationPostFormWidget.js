import React, {
  Component
}
from 'react'
import {
  reduxForm
}
from 'redux-form'

class DestinationPostFormWidget extends Component {
  render() {
    const {
      fields: {
        destinationName, destinationDescription, destinationImage, whyVisit
      },
      handleSubmit
    } = this.props

    return (
      <form onSubmit={handleSubmit} role="form">
        <div className="form-group">
          <label>Destination Name</label>
          <input type="text" className="form-control" placeholder="Paris..." {...destinationName}/>
        </div>
        <div className="form-group">
          <label>Destination Description</label>
          <input type="text" className="form-control" placeholder="Awesome place...." {...destinationDescription}/>
        </div>
        <div className="form-group">
          <label>Destination Image</label>
          <input type="url" className="form-control" placeholder="http://..." {...destinationImage}/>
        </div>
        <div className="form-group">
          <label>Why Visit</label>
          <textarea name="whyVisit" className="form-control" className="form-control" rows="3" required="required" {...whyVisit}></textarea>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    )
  }
}

DestinationPostFormWidget = reduxForm({
  form: 'destinationPostForm', // a unique name for this form
  fields: ['destinationName', 'destinationDescription', 'destinationImage', 'whyVisit'] // all the fields in the form
})(DestinationPostFormWidget)


DestinationPostFormWidget.displayName = 'DestinationPostFormWidget'

export default DestinationPostFormWidget
