import LayerAPI from 'layer-api'
import User from './db/models/user'
import Layer from 'layer-websdk'
require('dotenv').config()

// let layer = new LayerAPI ({
//   token: process.env.LAYER_TOKEN,
//   appId: process.env.LAYER_API
// })

// let client = new layer.Client({
//     appId: process.env.LAYER_API,
//     challenge: function(evt) {
      
//         getIdentityToken(evt.nonce, function(identityToken) {
//           console.log(identityToken)
//             evt.callback(identityToken);
//         })
//     },
//     ready: function() {
//         renderMyUI(client);
//     }
// })

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