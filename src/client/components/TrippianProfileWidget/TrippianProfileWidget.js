import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'
import {
  Link
}
from 'react-router'
import {
  CircleImageWidget, SectionHeaderWidget, TextIntroPlainWidget, StarRatingWidget
}
from '../index'
import {
  connect
}
from 'react-redux'
import {
  TrippianProfileWidget as appConfig
}
from '../../config/appConfig'
import {
  UserLinkWidget
}
from '../index'

//TODO: add profile editing 

// we made a decision here to read data from the store instead render stateless components
// because we'll add editing capability 
function mapStateToProps(state) {
  return {
    dashboard: state.apiTrippian.get('dashboard')
  }
}@
connect(mapStateToProps)
export default class TrippianProfileWidget extends Component {
  render() {
    const {
      name, username, displayName, location, email, facebookId = 0, googleId = 0, picture, totalRating, averageRating, bio, slogan, website, introduction, numberOfReviews
    } = this.props.dashboard

    return (
      <div className="user-profile-widget">
        <div className='menu-row text-right'>
          <button className="btn btn-default">
           <i className="fa fa-edit"></i> Edit 
          </button>
        </div>

        <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xs-offset-3 col-sm-offset-3 col-md-offset-4 col-lg-offset-4">
            <CircleImageWidget imageSrc={picture} title={displayName}/>
            </div>
        </div>
        <div className="row text-center">
            <h1>{name}</h1>
            <span>{location}</span>  &nbsp;     
            <StarRatingWidget stars={averageRating} />   <br/>
            <UserLinkWidget {...this.props.dashboard} showWebsite={true} showTrippianLink={true} />
            <br/> 
            {slogan} 
        </div> 
        <div className="section">
            <SectionHeaderWidget title={appConfig.bioSectionTitle} subTitle={appConfig.bioSectionSubtitle} />
            <div className="section-body">
                <TextIntroPlainWidget text={bio} />
            </div>
        </div>
        <div className="section">
            <SectionHeaderWidget title={appConfig.introductionSectionTitle} subTitle={appConfig.introductionSectionSubtitle} />
            <div className="section-body">
                <TextIntroPlainWidget text={introduction} />
            </div>
        </div>
     
    </div>
    )
  }
}
TrippianProfileWidget.displayName = 'TrippianProfileWidget'

export default TrippianProfileWidget
