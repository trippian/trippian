import React from 'react'
import ReactDriveIn from 'react-drive-in'


const JumbotronVideoWidget = () => {
  return (
    <div className="jumbotron jumbotron-video">
        <div>
          <ReactDriveIn className="react-drive-in-video" show="http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.mp4" poster="http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.jpg"/>
        </div>
        <h2>Hello</h2>
    </div>
  )
}


JumbotronVideoWidget.displayName = 'JumbotronVideoWidget'

export default JumbotronVideoWidget
