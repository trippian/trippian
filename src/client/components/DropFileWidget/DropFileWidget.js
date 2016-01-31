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
  PreviewImageWidget
}
from '../index'
export default class DropFileWidget extends Component {
  constructor(props) {
      super(props)
      this.state = {
        files: [],
        totalNumberOfFiles: 0,
        file: {},
        uploadedFiles: [],
        s3Path: this.props.s3Path || '/destination/'
      }

    }
    // unfortunately fetch doesn't support PUT request at this case, have to use axios
  onDrop(files) {

    this.setState({
      files: files,
      totalNumberOfFiles: files.length
    })

    const filePath = this.state.s3Path + store.getState().apiTrippian.get('currentUser').id
    files.forEach((file, index) => {
      // give a file path to reduce file name collision 
      file.path = filePath
      console.log('file path', file.path)
      apiS3.getS3SignedURL(file).then(data => {
          console.log('got signed url', file.name, data.signed_request, data)
          return axios.put(data.signed_request, file, {
            headers: {
              'Content-Type': file.type
            }
          })
        })
        .then(result => {
          // update the state, so we can observe the progress and change the preview 
          let uploadedFiles = this.state.uploadedFiles
          uploadedFiles.push(`${S3Config.baseUrl}/${result.config.data.name}`)
          console.log('uploadedFile path', `${S3Config.baseUrl}/${result.config.data.name}`)
            // uploadedFiles.push(`${S3Config.baseUrl}${filePath}/${result.config.data.name}`)
            // console.log('uploadedFile path', `${S3Config.baseUrl}${filePath}/${result.config.data.name}`)
          let files = this.state.files
          files.splice(index, 1)
          this.setState({
            uploadedFiles: uploadedFiles,
            files: files
          })
          console.log('****uploadedFiles', this.state.uploadedFiles)
            //TODO, update Store 
          console.log('saved file to s3', result, result.config.data.name);
        })
        //TODO set alert in store 
        .catch(error => console.log('error getting S3 signed url or save file to s3', error))
    })
  }
  onOpenClick() {
    this.refs.dropzone.open()
  }
  render() {
    return (
      <div className="row">
        <Dropzone ref="dropzone" onDrop={this.onDrop.bind(this)}>
          <span>Try drop some fiels here or click to slect fiels to upload</span>
        </Dropzone>
       < button type = "button"
       className = "btn btn-primary"
       onClick = {
           this.onOpenClick.bind(this)
         } >
         Upload Files < /button>

       <div className="row">
         {this.state.files.length > 0 ? <h3>Uploading {this.state.files.length} files...</h3> : null}
         {this.state.uploadedFiles.map((url, key) => <PreviewImageWidget key={key} src={url} /> )}
       </div>
      </div>
    )
  }
}


DropFileWidget.propTypes = {
  name: PropTypes.string
}
DropFileWidget.displayName = 'DropFileWidget'

export default DropFileWidget
