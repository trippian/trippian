import React from 'react'
import classnames from 'classnames'
import {
  COLOR_LIGHT_BLACK, SPACING_XSMALL
}
from '../../utils/styleGuide'
import Icon from '../../../components/IconWidget'

const LikeCounter = ({
  count, isActive, activeColor, handleLikes
}) => ( < a className = {
    classnames({
      'LikeCounter': true,
      'LikeCounter--active': isActive
    })
  }

  style = {
    {
      color: isActive ? activeColor : COLOR_LIGHT_BLACK
    }
  }

  onClick = {
    handleLikes
  } >
  <div>
      <span style={{marginRight: SPACING_XSMALL, display: 'inline-block'}}>
        <Icon name='thumbs-up' />
      </span>
      <span>{count} likes</span>
    </div> < /a>
)

LikeCounter.propTypes = {
  activeColor: React.PropTypes.string,
  count: React.PropTypes.number.isRequired,
  handleLikes: React.PropTypes.func,
  isActive: React.PropTypes.bool
}

export default LikeCounter
