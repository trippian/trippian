import React from 'react'

const VoteWidget = ({
  name = '', handleClick, disableLeft, disableRight
}) => {
  return (
    <div className="vote-buttons vote-widget">
        <button className={disableLeft} disabled={disableLeft} onClick={handleClick.bind(null, 1)} > <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span></button>
        <button className={disableRight} disabled={disableRight} onClick={handleClick.bind(null, -1)} > <span className="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></button>
    </div>
  )
}
VoteWidget.displayName = 'VoteWidget'

export default VoteWidget
