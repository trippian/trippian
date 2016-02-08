import log from '../../log'
import React from 'react'
import {
  FONT_SIZE_LARGE
}
from '../../utils/styleGuide'

const IconWidget = ({
  name
}) => {
  return (
    <i
      className={`fa fa-${name}`}
      style={{fontSize: FONT_SIZE_LARGE}}
    >
    </i>
  )
}

IconWidget.propTypes = {
  name: React.PropTypes.string.isRequired
}

IconWidget.displayName = 'IconWidget'
export default IconWidget
