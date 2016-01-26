import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget
}
from '../../components/index'
import {
  Table
}
from 'react-bootstrap'
import {
  Link
}
from 'react-router'

export default class AdminDestinationList extends Component {
  constructor(props) {
    super(props)
  }

  handleDelete() {
    console.log('deleting')
  }

  render() {

    return (
      <div id="admin-destination-page">
        <h3>Destination List</h3>
        <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name & Link</th>
               <th>Description</th>
               <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><Link to="admin/destination/58">Beijing</Link></td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>  
                  <a onClick={this.handleDelete.bind(this)}><span aria-hidden="true" className="glyphicon glyphicon-remove" ></span></a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to="admin/destination/58/edit"><span aria-hidden="true" className="glyphicon glyphicon-pencil" ></span></Link>
                </td>
              </tr>
              
            </tbody>
          </Table>

      </div>
    )
  }
}
AdminDestinationList.propTypes = {
  // name: PropTypes.string
}

AdminDestinationList.displayName = 'AdminDestinationList Page'
