import log from '../../log'
import React from 'react'

import {
  Table
}
from 'react-bootstrap'

import {
  Link
}
from 'react-router'

const tripsList = [{
  "summary": "Beijin summary goes here",
  "netVote": 0,
  "totalVotes": 0,
  "destination": "Beijing",
  "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "title": "Beijing Trip",
  "id": 24
}, {
  "summary": "i love things",
  "netVote": 0,
  "totalVotes": 0,
  "name": "hang out with me and drink coffee",
  "destination": "Beijing",
  "details": "Tour and drink the best coffee in Beigin",
  "title": "Beijing Coffee Drinkers",
  "id": 40
}]


const TripsTableWidget = ({
  trips = tripsList, handleDelete = (id) => {
    log.info('deleting', id)
  }
}) => {
  return (

    < Table striped bordered condensed hover >
    <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Title</th>
          <th>Destination</th>
          <th>Total Votes</th>
        </tr>
      </thead> < tbody > {
      trips.map((trip, key) => {
        const {
          id, title, destination, totalVotes
        } = trip
        return (
          <tr key={key}>
          <td>{key+1}</td>
          <td>{id}</td>
          <td>{title}</td>
          <td>{destination}</td>
          <td>{totalVotes}</td>
          <td>  
            <a onClick={handleDelete(id)}><span aria-hidden="true" className="glyphicon glyphicon-remove" ></span></a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="admin/destination/58/edit"><span aria-hidden="true" className="glyphicon glyphicon-pencil" ></span></Link>
          </td>
        </tr>
        )
      })
    } < /tbody> < /Table >
  )
}
TripsTableWidget.displayName = 'TripsTableWidget'

export default TripsTableWidget
