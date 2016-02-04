import React from 'react'
import {
  Link
}
from 'react-router'

const OperationMenuWidget = ({
  to = 'contact', text = 'Contact'
}) => {
  return (
    <div className="operation-menu-widget">
      <button onClick={this.handleDelete.bind(this)} title="Delete"> <i className="fa fa-close"></i></button> 
      <button onClick={this.handleEdit.bind(this)}  title = "Edit" > <i className="fa fa-edit"></i> < /button> 
    </div>
  )
}
OperationMenuWidget.displayName = 'OperationMenuWidget'

export default OperationMenuWidget
