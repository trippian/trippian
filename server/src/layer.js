import LayerAPI from 'layer-api'
import User from './db/models/user'
require('dotenv').config()

let layer = new LayerAPI ({
  token: process.env.LAYER_TOKEN,
  appId: process.env.LAYER_API
})

export default function () {

  createConversation: (objectId, cb) => {
    layer.conversation.create({participants: ['abcd']}, (err, res) => {
      if (err) {
        cb(err)
      } else {
        cb(null, res.body.id)
      }
    })
  }
}