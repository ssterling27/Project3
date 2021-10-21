const { model, Schema } = require('mongoose')

const Meetup = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Please provide a title']
  },
  // event description
  description: {
    type: String,
    trim: true,
    required: [true, 'Please provide a description']
  },
  // event date
  // start time
  start: {
    type: Date,
    required: [true, 'Please provide a start time']
  },
  // end time
  end: {
    type: Date,
    required: [true, 'Please provide an end time']
  },
  // event set for all day - optional
  allDay: {
    type: Boolean,
  },
  // event location - optional
  location: {
    type: String,
    trim: true,
  },
  // reference user model
  sentBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  sentTo: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  day: {
    type: String
  },
  hours: [{
    type: Number
  }]
}, { timestamps: true })

module.exports = model('Meetup', Meetup)