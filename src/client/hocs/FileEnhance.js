import React, {
  Component, PropTypes
}
from 'react'
import {
  DropFileWidget
}
from '../components/index'

// go to the store and get the file uploading state and file state, pass down to the ComposedComponent (form widgets) 
export const fileEnhance = ComposedComponent => class extends Component {

  constructor(props) {
    super(props)
    this.state = ({
      isFileUploading: false,
      files: []
    })
  }
  onUploadStart(files) {
    this.setState({
      isFileUploading: true
    })
    console.log('-----fileEnhance*****, starting...', files)
  }
  onUploading(progress) {
    console.log('-----fileEnhance*****, uploading...', progress)
  }
  onUploaded(uploadedFiles) {
    console.log('-----fileEnhance*****, uploaded file', uploadedFiles)
    this.setState({
      isFileUploading: false,
      files: uploadedFiles // now the composedComponent will have access to the uploaded files
    })
  }
  onUploadError(error) {
    console.log('-----fileEnhance*****, upload error', error)
  }

  render() {
    return (
      <div className='file-enhance'>
        <ComposedComponent {...this.props} {...this.state} />
        <DropFileWidget 
          onUploadStart={this.onUploadStart.bind(this)}
          onUploading={this.onUploading.bind(this)} 
          onUploaded={this.onUploaded.bind(this)} 
          onUploadError={this.onUploadError.bind(this)} 
          showProgress={true}/>
      </div>
    )
  }
}
