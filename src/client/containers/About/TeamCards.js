import React from 'react'
import {
  About
}
from '../index'

//Add team here later on
let team =  []



const TeamCards = ({
  teamMemebers = team
}) => {
    console.log('inside', teamMemebers)
    return (
      <div className="popular-trippians section-body clearfix">
        {
          teamMembers.map((member, key) => (
            <About key={key} {...member} />
            ))
        }
      </div>
    )
}

TeamCards.displayName = 'TeamCards'

export default TeamCards