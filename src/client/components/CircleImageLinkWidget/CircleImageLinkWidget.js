import React from 'react'

export default ({
  link = '#', src = 'http://lorempixel.com/150/150/people/', alt = 'image'
}) => {
  return (
    <a href={link} className="circle">
        <img src={src} alt={alt} />
    </a>
  )
}
