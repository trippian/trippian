import React from 'react'
import {
  Link
}
from 'react-router'

const TrippianListItemRoundWidget = ({
  name = 'Amanda . Sydney', id, picture = 'lorempixel.com/200/200/people/'
}) => {
  return (
    <div className="popular-trippians-item text-center">
        <Link to={`trippian/${id}`}>
            <div className="circle-image">
                <img src={`http://${picture}`} alt="" />
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
