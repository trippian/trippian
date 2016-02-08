import log from '../log'
import React, {
  Component, PropTypes
}
from 'react'
import {
  DropFileWidget
}
from '../components/index'
import store from '../redux/store'
import {
  setFiles
}
from '../redux/actionCreators'

// go to the store and get the file uploading state and file state, pass down to the ComposedComponent (form widgets) 
export const FileEnhance = ComposedComponent => class extends Component {

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
    log.info('-----fileEnhance*****, starting...', files)
  }
  onUploading(progress) {
    log.info('-----fileEnhance*****, uploading...', progress)
  }
  onUploaded(uploadedFiles) {
    log.info('-----fileEnhance*****, uploaded file', uploadedFiles)
    this.setState({
      isFileUploading: false,
      files: uploadedFiles // now the composedComponent will have access to the uploaded files
    })
    store.dispatch(setFiles(uploadedFiles))
  }
  onUploadError(error) {
    log.info('-----fileEnhance*****, upload error', error)
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
