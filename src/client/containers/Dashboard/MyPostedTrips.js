import React, {
  Component, PropTypes
}
from 'react'

import {
  TripListWidget
}
from '../../components/index'

import {
  connect
}
from 'react-redux'

function mapStateToProps(state) {
  return {
    // get the data directly from store as we already fetched in the Dashboard container
    dashboard: state.apiTrippian.get('dashboard')
  }
}

@
connect(mapStateToProps)
export default class MyPostedTrips extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowTripForm: true
    }
  }

  render() {
    const {
      postedTrips
    } = this.props.dashboard
    console.log('inside MyPostedTrips render', postedTrips)
    return (
      <div className="my-inquiries-page">
        <h2>A list of posted trips</h2>
        <TripListWidget dataList={postedTrips} />
      </div >

    )
  }
}



MyPostedTrips.propTypes = {
  name: PropTypes.string
}

MyPostedTrips.displayName = 'MyPostedTrips Page'
