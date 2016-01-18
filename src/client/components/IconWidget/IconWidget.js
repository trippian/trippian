import React from 'react'
import {
  FONT_SIZE_LARGE
}
from '../../utils/styleGuide'

const Icon = ({
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

Icon.propTypes = {
  name: React.PropTypes.string.isRequired
}

export default Icon
