
// color (could be a future)

const { model, Schema } = require('mongoose')

const Event = new Schema({
 // event title
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
 users: [{
  type: Schema.Types.ObjectId,
  ref: 'User'
 }],
//  reference the other friends involved in the event
}, { timestamps: true })

// export model Event
module.exports = model('Event', Event)