import log from '../../log'
import React from 'react'

const SaveTripButtonWidget = ({
  handleSave, disableButton
}) => {
  return (
    <button className={`save-trip-button ${disableButton ? 'disable' : ''}`} disable={disableButton}>
      <i className="fa fa-heart" onClick={handleSave.bind(null, true)}></i>
    </button>
  )
}
SaveTripButtonWidget.displayName = 'SaveTripButtonWidget'

export default SaveTripButtonWidget
