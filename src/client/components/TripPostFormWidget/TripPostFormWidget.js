import React, {
  Component
}
from 'react'
import {
  reduxForm
}
from 'redux-form'

// summary: "Beijin summary goes here",
// netVote: 0,
// totalVotes: 0,
// destination: "Beijing",
// details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
// title: "Beijing Trip",


class TripPostFormWidget extends Component {
  render() {
    const {
      fields: {
        destination, title, summary, details, feature, album
      },
      handleSubmit
    } = this.props

    return (
      <form onSubmit={handleSubmit} role="form">
        <div className="form-group">
          <label>Destination</label>
          <input type="text" className="form-control" placeholder="Paris..." {...destination}/>
        </div>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" placeholder="Awesome place...." {...title}/>
        </div>
        <div className="form-group">
          <label>Summary</label>
          <textarea name="whyVisit" className="form-control" className="form-control" rows="3" required="required" {...summary}></textarea>
        </div>
        <div className="form-group">
          <label>Detail</label>
          <textarea name="whyVisit" className="form-control" className="form-control" rows="3" {...details}></textarea>
        </div>
        <div className="form-group">
          <label>Feature Image</label>
          <input type="url" className="form-control" placeholder="http://..." value="http://lorempixel.com/400/200/city/" {...feature}/>
        </div>
        <div className="form-group">
          <label>Upload photos</label>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    )
  }
}


TripPostFormWidget = reduxForm({
  form: 'tripPostForm', // a unique name for this form
  fields: ['destination', 'title', 'summary', 'details', 'feature', 'album']
})(TripPostFormWidget)


TripPostFormWidget.displayName = 'TripPostFormWidget'

export default TripPostFormWidget
