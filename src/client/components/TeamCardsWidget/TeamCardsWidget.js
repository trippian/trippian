import React from 'react'
import {
  TeamCardWidget
}
from '../index'
import {
  aboutPage as appConfig
}
from '../../config/appConfig'

const TeamCardsWidget = ({
  dataList = appConfig.team
}) => {
  return (
    <div>
    { 
       dataList.map((member, key) => (
         <TeamCardWidget key={key} {...member} />
      ))
   }
    </div>
  )
}
TeamCardsWidget.displayName = 'TeamCardsWidget'

export default TeamCardsWidget
