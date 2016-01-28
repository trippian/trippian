import React, {
  Component
}
from 'react'
import {
  reduxForm
}
from 'redux-form'


class InquiryPostFormWidget extends Component {
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
        <button onClick={handleSubmit}>Submit</button>
      </form>
    )
  }
}

InquiryPostFormWidget = reduxForm({
  form: 'destinationPostForm', // a unique name for this form
  fields: ['name', 'description', 'feature', 'whyVisit'] // all the fields in the form
})(InquiryPostFormWidget)


InquiryPostFormWidget.displayName = 'InquiryPostFormWidget'

export default InquiryPostFormWidget
