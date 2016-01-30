import React from 'react'

const VoteWidget = ({
  name = '', handleClick
}) => {
  return (
    <div className="vote-buttons vote-widget">
        <button onClick={handleClick.bind(null, 1)} > <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span></button>
        <button onClick={handleClick.bind(null, -1)} > <span className="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></button>
    </div>
  )
}
VoteWidget.displayName = 'VoteWidget'

export default VoteWidget
