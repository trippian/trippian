import React from 'react'

const VoteWidget = ({
}) => {
  return (
  <div className="vote-buttons">
    <button onClick={this.props.onClick}> <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span></button>
  </div>
  )
}
VoteWidget.displayName = 'VoteWidget'

export default VoteWidget
