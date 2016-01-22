import React from 'react'
import {
  Link
}
from 'react-router'

const TrippianListItemRoundWidget = ({
  name = 'Amanda . Sydney', profilePicture = 'http://lorempixel.com/200/200/people/'
}) => {
  return (
    <div className="popular-trippians-item text-center">
        <Link to='trippian/123'>
            <div className="circle-image">
                <img src={profilePicture} alt="" />
            </div> < h4 > {
  name
} < /h4>

        </Link>
    </div>
  )
}
TrippianListItemRoundWidget
  .displayName = 'TrippianListItemRoundWidget'

export default TrippianListItemRoundWidget
