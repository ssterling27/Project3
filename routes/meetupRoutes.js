const router = require('express').Router()
const { User, Meetup, Event } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.post('/sendMeetupRequest/:id', passport.authenticate('jwt'), async function (req, res) {
  const meetup = await Meetup.create({...req.body, sentBy: { id: req.user._id, username: req.user.username, name: req.user.name }, sentTo: req.params.id})
  await User.findByIdAndUpdate(req.params.id, { $push: { meetupRequests: meetup._id} })
  res.sendStatus(200)
})

router.post('/acceptMeetupRequest/:userid/:meetupid', passport.authenticate('jwt'), async function (req, res) {
  const event = await Event.create({...req.body, users: [req.user._id, req.params.userid] })
  await User.findByIdAndUpdate(req.user._id, { $push: { events: event._id }})
  await User.findByIdAndUpdate(req.params.userid, { $push: { events: event._id }})
  await User.findByIdAndUpdate(req.user._id, { $pull: { meetupRequests: req.params.meetupid } })
  await Meetup.findByIdAndDelete(req.params.meetupid)
  res.json(event)
})

router.delete('/denyMeetupRequest/:meetupid', passport.authenticate('jwt'), async function (req, res) {
  await Meetup.findByIdAndDelete(req.params.meetupid)
  await User.findByIdAndUpdate(req.user._id, { $pull: {meetupRequests: req.params.meetupid }})
  res.sendStatus(200)
})

module.exports = router