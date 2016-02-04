import React from 'react'

const SaveTripButton = ({
  name = '', handleSave
}) => {
  return (
    <i className="fa fa-heart" onClick={handleSave.bind(null, true)}></i>
  )
}
SaveTripButton.displayName = 'SaveTripButton'

export default SaveTripButton