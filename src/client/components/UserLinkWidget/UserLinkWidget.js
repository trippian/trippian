import log from '../../log'
import React from 'react'
import {
  Link
}
from 'react-router'

const UserLinkWidget = ({
  id = 0, name, facebookId = 0, googleId = 0, username = '', displayName = '', picture = '', website = '', showFacebookLink = true, showGoogleLink = false, showTrippianLink = false, showWebSiteLink = false, showMobile = false
}) => {

  return (
    <div className="user-link-widget">
        {showFacebookLink && facebookId &&  <a href={`https:\/\/www.facebook.com/${facebookId}`}><i className="fa fa-facebook-official"></i></a>}
        {showGoogleLink && googleId !== 0  &&  <a href={`https:\/\/plus.google.com/${googleId}`}><i className="fa fa-google-plus"></i></a>}
        {showWebSiteLink && website && website !== '' && <a href={website}><i className="fa fa-external-link">{website}</i></a>}
        {showTrippianLink && id !== 0 &&  <Link to={`trippian/${id}`}>{name || displayName}</Link>}
    </div>
  )
}
UserLinkWidget.displayName = 'UserLinkWidget'

export default UserLinkWidget
