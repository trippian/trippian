import log from '../../log'
import React from 'react'

const SaveTripButton = ({
  handleSave, disableButton
}) => {
  return (
    <button className={disableButton} disable={disableButton}>
      <i className="fa fa-heart" onClick={handleSave.bind(null, true)}></i>
    </button>
  )
}
SaveTripButton.displayName = 'SaveTripButton'

export default SaveTripButton
