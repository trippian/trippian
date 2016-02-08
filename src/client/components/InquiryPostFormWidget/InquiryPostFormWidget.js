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
  setInquiry
}
from '../../redux/actionCreators'
import {
  InquiryPostFormWidget as appConfig
}
from '../../config/appConfig'
import {
  inquiry as initalInquiryData
}
from '../../redux/initalState'
import store from '../../redux/store'

class InquiryPostFormWidget extends Component {
  render() {
    const showAdminButtons = store.getState().appState.get('showAdminButtons')
    console.log('config', appConfig, 'showAdminButtons?', showAdminButtons)
    const {
      fields: {
        personCount, startDate, endDate, email, mobile, subject, content
      },
      handleSubmit,
      submitting,
      resetForm,
      load
    } = this.props
    let data = {
      personCount: 5,
      startDate: '2015-02-14',
      endDate: '2015-02-28',
      email: 'me@audreyli.me',
      mobile: '+001 123 456 789',
      subject: 'Need A Hiking Trip',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut voluptate corrupti soluta perferendis error, ipsam!'
    }

    return (
      <form onSubmit={handleSubmit} role="form">
        <div className="form-group">
          <label>{appConfig.labels.personCount}</label>
          <input type="number" className="form-control" value={1} {...personCount}/>
        </div>
        <div className="form-group">
          <label>{appConfig.labels.startDate}</label>
          <input type="date" className="form-control"  {...startDate} />
        </div>
        <div className="form-group">
          <label>{appConfig.labels.endDate}</label>
          <input type="date" className="form-control" {...endDate} />
        </div>
        <div className="form-group">
          <label>{appConfig.labels.email}</label>
          <input type="email" className="form-control" {...email}/>
        </div>
        <div className="form-group">
          <label>{appConfig.labels.mobile}</label>
          <input type="tel" className="form-control" placeholder="+001 123 456 789"  {...mobile}/>
        </div>

        <div className="form-group">
          <label>{appConfig.labels.subject}</label>
          <input type="text" className="form-control" placeholder="" {...subject}/>
        </div>
        <div className="form-group">
          <label>{appConfig.labels.content}</label>
          <textarea name="content" className="form-control" className="form-control" rows="3" {...content}></textarea>
        </div>

        <div className="pull-right">
          {showAdminButtons && <button type="button" className="btn btn-default" onClick={() => load(data)}>Load Dummy Data</button> }
          {showAdminButtons && <button type="button" className="btn btn-default" disabled={submitting} onClick={()=> load(initalInquiryData)} > Clear Values</button> }
          <button  disabled={submitting} className={'btn ' + (submitting ? 'disabled' : 'btn-success') } onClick={handleSubmit}>Submit</button> 
        </div>
      </form>
    )
  }
}

InquiryPostFormWidget = reduxForm({
    form: 'inquiryPostForm', // a unique name for this form
    fields: ['personCount', 'startDate', 'endDate', 'email', 'mobile', 'subject', 'content']
  },
  state => ({ // mapStateToProps
    initialValues: state.apiTrippian.get('inquiry') // will pull state into form's initialValues
  }), {
    load: setInquiry
  })(InquiryPostFormWidget)

InquiryPostFormWidget.displayName = 'InquiryPostFormWidget'

export default InquiryPostFormWidget
