import log from '../../log'
import React from 'react'

const PaginationWidget = ({
  name = 'PaginationWidget'
}) => {
  return (
    <div> 
    <h3>Widget</h3>
    {name}
    </div>
  )
}
PaginationWidget.displayName = 'PaginationWidget'

export default PaginationWidget
