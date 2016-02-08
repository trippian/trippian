import React, {
  Component
}
from 'react'
import {
  reduxForm
}
from 'redux-form'
import {
  ReviewAddFormWidget as appConfig
}
from '../../config/appConfig'


class ReviewAddFormWidget extends Component {
  render() {
    const {
      fields: {
        rating, title, content
      },
      handleSubmit
    } = this.props

    return (
      <form onSubmit={handleSubmit} role="form">
        <div className="form-group">
          <label>{appConfig.labels.rating}</label>
          <input type="number" className="form-control" placeholder="5"  value='5' max="1" min="5" {...rating}/>
        </div>
        <div className="form-group">
          <label>{appConfig.labels.title}</label>
          <input type="text" className="form-control" placeholder="Paris..."  {...title}/>
        </div>
        <div className="form-group">
          <label>{appConfig.labels.content}</label>
          <textarea name="content" className="form-control" className="form-control" rows="3" {...content}></textarea>
        </div>
        <button className='btn btn-success pull-right' onClick={handleSubmit}>{appConfig.buttons.submit}</button>
      </form>
    )
  }
}


ReviewAddFormWidget = reduxForm({
  form: 'reviewPostForm',
  fields: ['rating', 'title', 'content']
})(ReviewAddFormWidget)


ReviewAddFormWidget.displayName = 'ReviewAddFormWidget'

export default ReviewAddFormWidget
