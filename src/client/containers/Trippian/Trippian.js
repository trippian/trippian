import log from '../../log'
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
    log.info('will get trippian by id', id)
    store.dispatch(getTrippianById(id))
  }


  render() {
    log.info('***insider trippian detail render', this.props.trippian)

    const {
      name, bio, picture, slogan
    } = this.props.trippian

    return (
      <div id="trippian-profile-page" className="flexible-photo">
        <JumbotronTrippianWidget  metaTitle={name} user={this.props.trippian} />
        <div className="container main-content-container">
            <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
               {this.props.children}
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
