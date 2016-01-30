import AWS from 'aws-sdk'
import uuid from 'node-uuid'
require('dotenv').config()

export const getSignedRequest = function (req, res) {
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    signature: 'v4',
    region: process.env.S3_REGION
  })

  let s3 = new AWS.S3()

  let hashedFileName = uuid.v1()

  let s3_params = {
    Bucket: process.env.S3_BUCKET,
    Key: hashedFileName,
    Expires: 60,
    ContentType: req.query.type,
    ACL: 'public-read'
  }

  s3.getSignedUrl('putObject', s3_params, function (err, data) {
    if (err) {
      console.log(err)
    } else {
      let return_data = {
        signed_request: data,
        url: 'https://' + process.env.S3_BUCKET + '.s3.amazonaws.com/' + hashedFileName,
        fileName: hashedFileName
      }
      res.write(JSON.stringify(return_data))
      res.end()
    }
  })
}
