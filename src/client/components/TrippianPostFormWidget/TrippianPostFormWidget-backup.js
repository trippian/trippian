import React, {
  Component
}
from 'react'
import {
  reduxForm
}
from 'redux-form'

class TrippianPostFormWidget extends Component {
  render() {
    const {
      fields: {
        name, email, location, mobile, slogan, website, bio, introduction
      },
      handleSubmit
    } = this.props

    return (

      <form onSubmit={handleSubmit} role="form">
       <div className="form-group">
         <label>Name</label>
         <input type="text" className="form-control" placeholder="" value="Audrey Li" {...name}/>
       </div>

       <div className="form-group">
         <label>Email</label>
         <input type="email" className="form-control" value='me@audreyli.me'  {...email}/>
       </div>

       <div className="form-group">
         <label>Location</label>
         <input type="text" className="form-control" value='Beijing, China'  {...location}/>
       </div>

       <div className="form-group">
         <label>Mobile</label>
         <input type="tel" className="form-control" placeholder="+001 123 456 789" value="+001 123 456 789" {...mobile}/>
       </div>

       <div className="form-group">
         <label>Slogan</label>
         <input type="text" className="form-control" placeholder="" value="Life is short, travel hard" {...slogan}/>
       </div>
       <div className="form-group">
         <label>Website</label>
         <input type="text" className="form-control" placeholder="" value="http://audreyli.me" {...website}/>
       </div>
       <div className="form-group">
         <label>Bio</label>
         <textarea name="bio" className="form-control" className="form-control" rows="3" required="required" value="Lorem ipsum dolor." {...bio}></textarea>
       </div>

       <div className="form-group">
         <label>Introduction</label>
         <textarea name="introduction" className="form-control" className="form-control" rows="3" required="required" value="Lorem ipsum dolor." {...introduction}></textarea>
       </div>
       <button onClick={handleSubmit}>Submit</button>
     </form>
    )
  }
}




TrippianPostFormWidget = reduxForm({
  form: 'trippianPostForm', // a unique name for this form
  fields: ['name', 'email', 'location', 'mobile', 'slogan', 'website', 'bio', 'introduction'] // all the fields in the form
})(TrippianPostFormWidget)


TrippianPostFormWidget.displayName = 'TrippianPostFormWidget'

export default TrippianPostFormWidget
