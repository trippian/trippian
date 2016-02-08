import log from '../../log'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import React, {
  Component, PropTypes
}
from 'react'
import {
  S3 as S3Config
}
from '../../config/appConfig'
import apiS3 from '../../utils/apiS3'
import store from '../../redux/store'
import {
  ProgressBar
}
from 'react-bootstrap'
import {
  PreviewImageWidget
}
from '../index'
import {
  DropFileWidget as appConfig
}
from '../../config/appConfig'

const maxNumberOfFilesAllowed = appConfig.maxNumberOfFilesAllowed || 5
export default class DropFileWidget extends Component {

  constructor(props) {
    super(props)
    this.state = {
      files: [],
      totalNumberOfFiles: 0,
      progress: 0,
      uploadedFiles: [],
      s3Path: this.props.s3Path || 'destination/'
    }
  }

  onDrop(files) {
    if (files.length > maxNumberOfFilesAllowed) {
      this.props.onUploadError(appConfig.exceedMaxNumberOfFilesErrorMessage)
      return
    }
    this.setState({
      files: files,
      totalNumberOfFiles: files.length
    })

    this.props.onUploadStart(files)

    const filePath = this.state.s3Path + store.getState().apiTrippian.get('currentUser').id + '/'
    files.forEach((file, index) => {
      // give a file path to reduce file name collision 
      file.path = filePath
      log.info('----file path & name', filePath, file.name)
      apiS3.getS3SignedURL(file).then(data => {

          log.info('got signed url', file.name, data.signed_request, data)
          return axios.put(data.signed_request, file, {
            headers: {
              'Content-Type': file.type
            }
          })
        })
        .then(result => {
          // update the state, so we can observe the progress and change the preview 
          let uploadedFiles = this.state.uploadedFiles
            // uploadedFiles.push(`${S3Config.baseUrl}/${result.config.data.name}`)
            // log.info('uploadedFile path', `${S3Config.baseUrl}/${result.config.data.name}`)
          uploadedFiles.push(`${S3Config.baseUrl}${filePath}${result.config.data.name}`)
          log.info('uploadedFile path', `${S3Config.baseUrl}${filePath}${result.config.data.name}`)
            //show the progress
          this.setState({
            uploadedFiles: uploadedFiles,
            progress: uploadedFiles.length / files.length
          })
          log.info('progress----', uploadedFiles.length / files.length)
          this.props.onUploading(this.state.progress)


          // if all uploaded, remove files from state and call the passed callback function
          if (files.length === uploadedFiles.length) {
            this.setState({
              files: [],
              totalNumberOfFiles: 0
            })
            this.props.onUploaded(uploadedFiles)
          }
          log.info('****uploadedFiles', this.state.uploadedFiles)
            //TODO, update Store 
          log.info('saved file to s3', result, result.config.data.name);
        })
        .catch(error => {
          this.props.onUploadError(error)
        })
    })
  }
  onOpenClick() {
    this.refs.dropzone.open()
  }
  render() {
    const showProgress = this.state.progress !== 0
    const showSuccess = this.state.files.length === 0 && this.state.uploadedFiles.length !== 0
    return (
      <div className="drop-file-widget">
        <Dropzone ref="dropzone" onDrop={this.onDrop.bind(this)}>
          <span>{appConfig.dropMessage}</span>
        </Dropzone>
        <div className="upload-info">
          {showProgress && !showSuccess && <ProgressBar striped bsStyle="success" now={this.state.progress * 100}  /> }
          {this.state.files.length > 0 ? <h3>{appConfig.fileUploadingMessage} {this.state.files.length} </h3> : null}
          {showSuccess && <h3> {appConfig.fileUploadedMessage} {this.state.uploadedFiles.length} </h3> }
        </div>
       <div className="row">
         {this.state.uploadedFiles.map((url, key) => <PreviewImageWidget key={key} src={url} /> )}
       </div>
      </div>
    )
  }
}


DropFileWidget.propTypes = {
  onUploadStart: PropTypes.func,
  onUploading: PropTypes.func,
  onUploaded: PropTypes.func,
  onUploadError: PropTypes.func,
  showProgress: PropTypes.bool,
  name: PropTypes.string
}
DropFileWidget.displayName = 'DropFileWidget'

export default DropFileWidget
