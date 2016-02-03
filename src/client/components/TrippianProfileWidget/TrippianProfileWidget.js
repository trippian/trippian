import React from 'react'
import {
  Link
}
from 'react-router'
import {
  CircleImageWidget

}
from '../index'

const TrippianProfileWidget = ({
  username, displayName, email, facebookId = 0, googleId = 0, picture, totalRating, bio, slogan, website, introduction
}) => {
  return (
    <div className="user-profile-widget">
        <div className="row">
           <div className="col-sm-6 col-md-6 col-lg-3 col-sm-offset-4 col-md-offset-3 col-lg-offset-4">
            <CircleImageWidget imageSrc={picture} />
           </div>
         </div>
         <div className="row">
            <h2>Trippian</h2>
           <p><b>username: </b>{username}</p>
           <p><b>displayName: </b>{displayName}</p>
           <p><b>email: </b>{email}</p>
           <p><b>facebookId: </b>{facebookId}</p>
           <p><b>googleId: </b>{googleId}</p>
           <p><b>slogan: </b>{slogan}</p>
           <p><b>website: </b>{website}</p>
           <p><b>bio: </b>{bio}</p>
           <p><b>introduction: </b>{introduction}</p>
         </div>
    </div>
  )
}
TrippianProfileWidget.displayName = 'TrippianProfileWidget'

export default TrippianProfileWidget
