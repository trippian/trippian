import log from '../../log'
import React from 'react'
import {
  Link
}
from 'react-router'

const OperationMenuWidget = ({
  handleDelete = null, handleEdit = null, isDelete = false, isEdit = false
}) => {
  return (
    <div className="operation-menu-widget">
      {isDelete && <button onClick={handleDelete} title="Delete"> <i className="fa fa-close"></i></button> }
      {isEdit && <button onClick={handleEdit}  title = "Edit" > <i className="fa fa-edit"></i> < /button> }
    </div>
  )
}
OperationMenuWidget.displayName = 'OperationMenuWidget'

export default OperationMenuWidget
