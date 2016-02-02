import React from 'react'

const PreviewImageWidget = ({
  src = '', alt = 'trippian image'
}) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <a href={src} className="thumbnail">
            <img src={src} alt={alt} />
        </a>
    </div>
  )
}
PreviewImageWidget.displayName = 'PreviewImageWidget'

export default PreviewImageWidget
