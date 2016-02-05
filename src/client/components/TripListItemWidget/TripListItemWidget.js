import React, {
  Component
}
from 'react'
import {
  Link
}
from 'react-router'
import {
  VoteWidget, SaveTripButton
}
from '../index'
import {
  voteTrip, deleteTripById, toggleSaveTrip
}
from '../../redux/apiIndex'
import store from '../../redux/store'
import {
  getCanVote //, getCanSave
}
from '../../../shared/utils/clientUtils'

export default class TripListItemWidget extends Component {
  constructor(props) {
    super(props)
      // to simplify the vote logic and display, we'll just take the vote as state 
    this.state = {
      isSaved: false,
      netVote: 0,
      lastVote: 0,
      currentNetVote: 0 // TODO: read from the store whether the user already voted, now, just assume not. value: -1, 0, 1
    }
  }

  handleSave(saveState) {
    console.log('*** handling save', saveState, this.props.id)
      // const canSave = getCanSave(this.state.isSaved)
    console.log('before', this.setState.isSaved)
    if (!this.state.isSaved) {
      store.dispatch(toggleSaveTrip(saveState, this.props.id))
      this.setState({
        isSaved: this.state.stateState
      })
      console.log('after', this.setState.isSaved)
    }

  }

  // TODO: fix the voting logic here by getting original currentNetVote from network
  handleVote(vote) {
    console.log('*** handling vote', vote, this.props.id)
    const canVote = getCanVote(this.state.currentNetVote, vote)
    if (canVote) {
      store.dispatch(voteTrip(vote, this.props.id))

      this.setState({
        netVote: this.state.netVote + vote,
        currentNetVote: this.state.currentNetVote + vote
      })
    } else {
      console.log('sorry, you already voted') // just for debugging, can 
    }
  }
  componentDidMount() {
    this.setState({
      netVote: this.props.netVote,
      isSaved: this.props.setState
    })
  }

  handleDelete() {
      console.log('deleting trip called', this.props.id)
      store.dispatch(deleteTripById(this.props.id))
    }
    //TODO:
  handleEdit() {
    console.log('editing trip called', this.props.id)
  }

  //TODO: add edit and delete to trips
  render() {
    console.log('inside TripListItemWidget render')
    const {
      id, handleVote, title, destination, summary, details, feature, lat, lng, displayName = 'Trippian'
    } = this.props
    return (
      <div className="trip-list-item row">
          <div className="col-xs-6 col-sm-3 col-md-3 col-xs-offset-3 col-sm-offset-0">
              <Link to={`trip/${id}`}>
                <img className="feature-image" src={feature} alt="" />
              </Link>
              <div className="operation">
                <button onClick={this.handleDelete.bind(this)} title="Delete"> <i className="fa fa-close"></i></button> 
                <button onClick={this.handleEdit.bind(this)}  title = "Edit" > <i className="fa fa-edit"></i> < /button> 
              </div>
          </div>
          <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7">
              <div className="title-section">
                  <Link to={`trip/${id}`}>
                    <h4>{title}</h4>
                  </Link>
                  <div className="sub-title">
                      <i className="fa fa-map-marker"></i>
                      Mission street . By  
                        <Link to={`trippian/${id}`}>{' '+ displayName + ' '}</Link>
                      {id}
                  </div>
                  <p>{summary}</p>
              </div>
          </div>
          <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 vote">
              <span className="total-votes"> {this.state.netVote} </span>
              <VoteWidget disableLeft={this.state.currentNetVote === 1} disableRight={this.state.currentNetVote === -1} handleClick={this.handleVote.bind(this)} />
              <SaveTripButton disabledButton={this.state.isSaved} handleSave={this.handleSave.bind(this)} />
          </div>
      </div>
    )
  }
}

TripListItemWidget.displayName = 'TripListItemWidget'

export default TripListItemWidget
