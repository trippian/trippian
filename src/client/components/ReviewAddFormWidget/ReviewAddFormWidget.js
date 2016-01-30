import React, {
  Component
}
from 'react'
import {
  reduxForm
}
from 'redux-form'

class ReviewAddFormWidget extends Component {
  render() {
    const {
      fields: {
        rating, title, content
      },
      handleSubmit
    } = this.props

    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur tempore cumque voluptates, velit molestiae suscipit, dolor accusantium aliquam. Et ipsa alias quis recusandae, iure maxime deleniti ab perferendis eligendi saepe!'
    return (
      <form onSubmit={handleSubmit} role="form">
        <div className="form-group">
          <label>Rating</label>
          <input type="number" className="form-control" placeholder="5" value="5" {...rating}/>
        </div>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" placeholder="Paris..."  value="Had Awesome Trip "{...title}/>
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea name="content" className="form-control" className="form-control" rows="3"  value={lorem} {...content}></textarea>
        </div>
        <button className='btn btn-success pull-right' onClick={handleSubmit}>Add My Review</button>
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
