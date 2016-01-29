import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronTrippianWidget, TextIntroPlainWidget, TextIntroRichWidget, ReviewListWidget, DummyRichTextWidget
}
from '../../components/index'

import store from '../../redux/store'
import {
  connect
}
from 'react-redux'
import {
  getTrippianById
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
  }

  componentDidMount() {
    const id = this.props.params.id
    console.log('will get trippian by id', id)
    store.dispatch(getTrippianById(id))
  }


  render() {
    console.log('***insider trippian detail render', this.props.trippian)

    const {
      name, bio, picture, slogan
    } = this.props.trippian

    return (
      <div id="trippian-profile-page">
        <JumbotronTrippianWidget isMetad {...this.props.trippian} />
        <div className="container main-content-container">
            <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
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
                    <ReviewListWidget />
                </div>
            </div>
        </div>
      </div>
    )
  }
}
TrippianDetail.propTypes = {
  name: PropTypes.string
}

TrippianDetail.displayName = 'TrippianDetail'
