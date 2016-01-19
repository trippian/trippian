import React from 'react'

const TrippianListItemWidget = ({
  name = 'Amanda . Sydney'
}) => {
  return (
    <div className="popular-trippians-item text-center">
        <div className="circle-image">
            <img src="http://lorempixel.com/200/200/people/" alt="" />
        </div>
        <h4>{name}</h4>
    </div>
  )
}
TrippianListItemWidget.displayName = 'TrippianListItemWidget'

export default TrippianListItemWidget
