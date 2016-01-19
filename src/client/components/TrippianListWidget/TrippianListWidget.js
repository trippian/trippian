import React from 'react'
import {
  TrippianListItemWidget
}
from '../index'

const TrippianListWidget = ({
  name = 'TrippianListWidget'
}) => {
  return (
    <div className="popular-trippians section-body clearfix">
        <TrippianListItemWidget />
        <TrippianListItemWidget />
        <TrippianListItemWidget />
        <TrippianListItemWidget />
        <TrippianListItemWidget />
        <TrippianListItemWidget />
    </div>
  )
}
TrippianListWidget.displayName = 'TrippianListWidget'

export default TrippianListWidget
