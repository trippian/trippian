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
        personCount, startDate, endDate, email, mobile, subject, content
      },
      handleSubmit
    } = this.props

    return (
      <form onSubmit={handleSubmit} role="form">
        <div className="form-group">
          <label>Number of People</label>
          <input type="number" className="form-control" value="1" {...personCount}/>
        </div>
        <div className="form-group">
          <label>Start Date</label>
          <input type="date" className="form-control" value="2016-02-12" {...startDate} />
        </div>
        <div className="form-group">
          <label>End Date</label>
          <input type="date" className="form-control" value="2016-02-28" {...endDate} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" value='me@audreyli.me'  {...email}/>
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input type="tel" className="form-control" placeholder="+001 123 456 789" value="+001 123 456 789" {...mobile}/>
        </div>

        <div className="form-group">
          <label>Subject</label>
          <input type="text" className="form-control" placeholder="" value="subject here..." {...subject}/>
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea name="content" className="form-control" className="form-control" rows="3" required="required" value="Lorem ipsum dolor." {...content}></textarea>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    )
  }
}

InquiryPostFormWidget = reduxForm({
  form: 'inquiryPostForm', // a unique name for this form
  fields: ['personCount', 'startDate', 'endDate', 'email', 'mobile', 'subject', 'content']
})(InquiryPostFormWidget)


InquiryPostFormWidget.displayName = 'InquiryPostFormWidget'

export default InquiryPostFormWidget
