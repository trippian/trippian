import Chat from '../db/models/chat'
import User from '../db/models/user'
import layer from '../layer'
import _ from 'lodash'

export default {
  chatGet: (req,res,next) => {

  },

  chatPost: (req,res,next) => {
    Chat.create(req.body.trippeeId, req.body.trippianId, () => {
      console.log('chatController.js line 13')
    })

  }
}