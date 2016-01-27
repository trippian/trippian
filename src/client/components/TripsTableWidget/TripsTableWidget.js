import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}
from '../../components/index'

import {
  Table, Alert
}
from'react-bootstrap'

import {
  Link
}
from 'react-router'

import {
  bindActionCreators
}

export default class TripsTableWidget extends Component {

}

const TrippianListWidget = ({
  trips = trips
}) => {
    console.log('inside', tripp)
    return (
      <div className="popular-trippians section-body clearfix">
        {trips}
      </div>
    )
}

TrippianListWidget.displayName = 'TripsTableWidget'

export default TripsTableWidget