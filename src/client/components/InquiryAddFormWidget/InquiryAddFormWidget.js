import React from 'react'
import {
  Link
}
from 'react-router'
import {
  InquiryAddFormWidget as appConfig
}
from '../../config/appConfig'

const InquiryAddFormWidget = () => {
  return (
    <form action="" method="POST" role="form">
        <legend>{appConfig.formTitle}</legend>
        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" id="" placeholder="Name" />
        </div>
        <div className="form-group">
            <label>From</label>
            <input type="date" name="" id="input" className="form-control" value="" required="required" title="from date" />
            <label>To</label>
            <input type="date" name="" id="input" className="form-control" value="" required="required" title="to date" />
        </div>
        <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" id="" placeholder="Email" />
        </div>
        <div className="form-group">
            <label>Mobile</label>
            <input type="text" className="form-control" id="" placeholder="Mobile" />
        </div>
        <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" id="" placeholder="Title" />
        </div>
        <div className="form-group">
            <label>Content</label>
            <textarea name="requirements" id="inputRequirements" className="form-control" rows="3"></textarea>
        </div>
        <div className="form-group">
            <p>
                <Link to='my-inquiries' className="btn btn-primary pull-right">Submit</Link>
            </p>
        </div>
    </form>
  )
}


InquiryAddFormWidget.displayName = 'InquiryAddFormWidget'

export default InquiryAddFormWidget
