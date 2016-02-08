import log from '../../log'
import React from 'react'
import {
  Link
}
from 'react-router'
import {
  CircleImageWidget
}
from '../index'

const UserProfileWidget = ({
  username, displayName, email, facebookId = 0, googleId = 0, picture
}) => {
  return (
    <div className="user-profile-widget">
      <div className="row">
        <div className="col-sm-3 col-md-4 col-lg-4 col-sm-offset-4 col-md-offset-3 col-lg-offset-1">
          <CircleImageWidget imageSrc={picture} />
        </div>
        <div className="col-sm-3 col-md-3 col-lg-4 col-sm-offset-5 col-md-offset-3 col-lg-offset-2">
          <h1>Michael</h1>
          <p>"Traveling is fun. Everyone should travel."</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3 col-md-4 col-lg-6">
          <h1>Bio</h1>
          <p>Hey everyone. My name is Joe and I really like to travel. I have been all over the world but my favorite place is Somalia. I always wanted to be a pirate. Arg!</p>
        </div>
        <div className="col-sm-3 col-md-4 col-lg-4 col-sm-offset-4 col-md-offset-3 col-lg-offset-1">
          <h1>Personal</h1>
          <p>{displayName}</p>
          <p><i className="fa fa-envelope-o"></i> joelagasse@gmail.com</p>
          <p><i className="fa fa-facebook"></i> facebook.com/jlag34</p>
          <p><i className="fa fa-google-plus"></i> google.com/jlag34</p>
        </div>
      </div>
    </div>
  )
}
UserProfileWidget.displayName = 'UserProfileWidget'

export default UserProfileWidget
