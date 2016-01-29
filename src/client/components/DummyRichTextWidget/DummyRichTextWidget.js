import React from 'react'
import {
  Link
}
from 'react-router'

const DummyRichTextWidget = ({
  to = 'contact', text = 'Contact'
}) => {
  return (
    <div>
        <ul className="list-group">
            <li className="list-group-item">Trip 1: Lorem ipsum dolor sit.</li>
            <li className="list-group-item">Trip 2: Lorem ipsum dolor.</li>
            <li className="list-group-item">Trip 3: Lorem ipsum dolor sit amet.</li>
        </ul> 
        < div className = "youtube-video" >
        < iframe src = "https://www.youtube.com/embed/AQ6GmpMu5L8"
        frameBorder = "0"
        allowFullScreen > < /iframe> < /div> < div className = "google-map" >
        < iframe src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9971829383094!2d2.2923237802887466!3d48.85826410877076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fe1f3bfb4ad%3A0x7bd31375becf28cd!2sEiffel+Tower%2C+5+Avenue+Anatole+France%2C+75007+Paris%2C+France!5e0!3m2!1sen!2sus!4v1452992121001"
        width = "600"
        height = "450"
        frameBorder = "0"
        allowFullScreen > < /iframe> < /div>
        </div>
  )
}
DummyRichTextWidget.displayName = 'DummyRichTextWidget'

export default DummyRichTextWidget
