import log from '../../log'
import React from 'react'

const TeamCardWidget = ({
  github = 'https://github.com/trippian/', name = '', image = '', about = '', location = '', role = 'Software Engineer'
}) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 team">
      <div className="text-center">
        <div className="circle-image photo">
            <a href={github}>
              <img src={image} alt={name} />
            </a>
        </div>
        <div className="row">
            <h2>{name}</h2>
            <h4>{location}</h4>
            <h4>{role}</h4>
            <p className="text-left">{about}</p>
        </div>
      </div>
    </div>
  )
}
TeamCardWidget.displayName = 'TeamCardWidget'

export default TeamCardWidget
