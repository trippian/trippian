import React, {
  Component, PropTypes
}
from 'react'

import {
  TextIntroPlainWidget, TextIntroRichWidget, ReviewListWidget, DummyRichTextWidget, ReviewAddFormWidget
}
from '../../components/index'

import store from '../../redux/store'
import {
  Alert
}
from 'react-bootstrap'
import {
  connect
}
from 'react-redux'
import {
  postReview
}
from '../../redux/apiIndex'


function mapStateToProps(state) {
  return {
    trippian: state.apiTrippian.get('trippian')
  }
}

@
connect(mapStateToProps)
export default class TrippianDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alert: {
        type: 'success',
        title: '',
        message: ''
      }
    }
  }

  // note because we are sharing data in the main container and jumbotron area, we just have to make one 'getTrippianById' at the store at higher level ('Trippian.js'), then we can ask the store for the data 
  // componentDidMount() {
  //   const id = this.props.params.id
  //   console.log('will get trippian by id', id)
  //   store.dispatch(getTrippianById(id))
  // }
  handleAlertDismiss() {
    this.setAlert()
  }
  setAlert(type = 'success', title = '', message = '') {
    this.setState({
      showForm: false,
      alert: {
        type: type,
        title: title,
        message: message
      }
    })
  }
  handleReviewSubmit(data) {
    console.log('posting data from form', data)
    data.trippianId = this.props.trippian.id
    store.dispatch(postReview(data))
    this.setAlert('success', 'Successfully submitted data', data.title)
  }

  render() {
    console.log('***insider trippian detail render', this.props.trippian)

    const {
      name, bio, picture, slogan, reviews
    } = this.props.trippian
    const {
      type, title, message
    } = this.state.alert

    return (
      <div>
              <div className="section">
                <div className="section-header">
                    <h3>Bio</h3>
                    <TextIntroPlainWidget text={bio} />
                </div>
            </div>
            <div className="section">
                <div className="section-header">
                    <h3>My Trips</h3>
                </div>
                <div className="section-body">
                  <DummyRichTextWidget />
                </div>
            </div>
            <div className="section review">
                <div className="section-header">
                    <h3>Reviews</h3>
                </div>
                <div className="section-body">
                  <ReviewListWidget dataList={this.props.trippian.reviews} />
                </div>
            </div>
            <div className="section add-review">
                <div className="section-header">
                    <h3>Add a Review</h3>
                </div>
                {title !== '' && 
                  <Alert bsStyle={type} dismissAfter={3000} onDismiss={this.handleAlertDismiss.bind(this)}>
                    <h4>{title}</h4>
                    <p>{message}</p>
                  </Alert>
                }
                <ReviewAddFormWidget dataList={reviews} onSubmit={this.handleReviewSubmit.bind(this)} />
            </div>

        </div>
    )
  }
}
TrippianDetail.propTypes = {
  name: PropTypes.string,
  trippian: PropTypes.object
}

TrippianDetail.displayName = 'TrippianDetail'
