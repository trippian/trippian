import React from 'react'
import {Link} from 'react-router'

const TrippianListItemWidget = ({
  name = 'Amanda . Sydney'
}) => {
  return (
    <div className="popular-trippians-item text-center">
        <Link to='trippian/123'>
            <div className="circle-image">
                <img src="http://lorempixel.com/200/200/people/" alt="" />
            </div> < h4 > {
  name
} < /h4>

        </Link>
    </div>
  )
}
TrippianListItemWidget.displayName = 'TrippianListItemWidget'

export default TrippianListItemWidget
