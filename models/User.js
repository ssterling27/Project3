const { model, Schema, SchemaTypes } = require('mongoose')

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
  }],
  friendRequests: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  meetupRequests: [{
    type: Schema.Types.ObjectId,
    ref: 'Event'
  }]
})

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)