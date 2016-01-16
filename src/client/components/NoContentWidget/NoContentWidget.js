import React from 'react'

export default ({
  message = 'There is no content'
}) => {
  return (
    <div className="no-content">
        <h3>{message}</h3>
    </div>
  )
}
