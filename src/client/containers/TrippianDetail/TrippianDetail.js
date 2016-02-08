import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'

import {
  TextIntroPlainWidget, TextIntroRichWidget, ReviewListWidget, DummyRichTextWidget, ReviewAddFormWidget, TripListWidget, SectionHeaderWidget
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
import {
  TrippianDetail as appConfig
}
from '../../config/appConfig'

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
  //   log.info('will get trippian by id', id)
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
    log.info('posting data from form', data)
    data.trippianId = this.props.trippian.id
    store.dispatch(postReview(data))
    this.setAlert('success', 'Successfully submitted data', data.title)
  }

  render() {
    log.info('***insider trippian detail render', this.props.trippian)

    const {
      name, bio, picture, slogan, reviews, introduction, location, averageRating, trips
    } = this.props.trippian
    const {
      type, title, message
    } = this.state.alert

    return (
      <div>
            <div className="section">
                <SectionHeaderWidget title={appConfig.bioSectionTitle} subTitle={appConfig.bioSectionSubtitle} />
                <div className="section-body">
                    <TextIntroPlainWidget text={bio} />
                </div>
            </div>

            <div className="section">
                <SectionHeaderWidget title={appConfig.introductionSectionTitle} subTitle={appConfig.introductionSectionSubtitle} />
                <div className="section-body">
                    <TextIntroPlainWidget text={introduction} />
                </div>
            </div>

            <div className="section">
                <SectionHeaderWidget title={appConfig.myTripsSectionTitle} subTitle={appConfig.myTripsSectionSubtitle} />
                <div className="section-body">
                    <TripListWidget dataList={trips} />
                </div>
            </div>

            <div className="section">
                <SectionHeaderWidget title={appConfig.reviewsSectionTitle} subTitle={appConfig.reviewsSectionSubtitle} />
                <div className="section-body">
                  <ReviewListWidget dataList={reviews} />
                </div>
            </div>

            <div className="section add-review">
                <SectionHeaderWidget title={appConfig.addReviewSectionTitle} subTitle={appConfig.addReviewSectionSubtitle} />
                <div className="section-body">
                {title !== '' && 
                  <Alert bsStyle={type} dismissAfter={3000} onDismiss={this.handleAlertDismiss.bind(this)}>
                    <h4>{title}</h4>
                    <p>{message}</p>
                  </Alert>
                }
                <ReviewAddFormWidget onSubmit={this.handleReviewSubmit.bind(this)} />
                </div>
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
