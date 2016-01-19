import React from 'react'
import {
  TrippianListItemRoundWidget
}
from '../index'

const TrippianListRoundWidget = ({
  name = 'TrippianListRoundWidget'
}) => {
  return (
    <div className="popular-trippians section-body clearfix">
        <TrippianListItemRoundWidget />
        <TrippianListItemRoundWidget />
        <TrippianListItemRoundWidget />
        <TrippianListItemRoundWidget />
        <TrippianListItemRoundWidget />
        <TrippianListItemRoundWidget />
    </div>
  )
}
TrippianListRoundWidget.displayName = 'TrippianListRoundWidget'

export default TrippianListRoundWidget
