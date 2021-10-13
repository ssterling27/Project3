const { model, Schema } = require('mongoose')

const User = new Schema({
  name: String,
  username: String,
  events: [{
    type: Schema.Types.ObjectId,
    ref: 'Event'
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
})

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)