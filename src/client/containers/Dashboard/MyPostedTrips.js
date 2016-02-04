import React, {
  Component, PropTypes
}
from 'react'

import {
  TripListWidget, TripPostFormWidget
}
from '../../components/index'

import {
  connect
}
from 'react-redux'
import store from '../../redux/store'
import {
  postTrip
}
from '../../redux/apiIndex'

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
      showForm: false
    }
  }

  handleSubmit(data) {
    console.log('posting data from trip form', data)
    store.dispatch(postTrip(data))
  }


  render() {
    const {
      postedTrips
    } = this.props.dashboard
    console.log('inside MyPostedTrips render', postedTrips)
    return (
      <div className="my-posted-trips-page">
        <button onClick={()=> this.setState({showForm: !this.state.showForm})} className="btn btn-primary pull-right">Create a Trip</button>
        {postedTrips.length === 0 && 
            <div>
              <h2>You have not created any trips yet. </h2>
            </div>

          }
        {this.state.showForm && 
          <TripPostFormWidget onSubmit={this.handleSubmit.bind(this)} /> 
        }

        {postedTrips.length > 0 && 
          <div>
            <h2>A list of posted trips</h2>
          <TripListWidget dataList={postedTrips} /> 
          </div>
        }
      </div >

    )
  }
}



MyPostedTrips.propTypes = {
  name: PropTypes.string
}

MyPostedTrips.displayName = 'MyPostedTrips Page'
