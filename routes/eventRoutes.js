const router = require('express').Router()
const { Event, User } = require('../models')
const passport = require('passport')

router.get('/events/:user_id/:date', passport.authenticate('jwt'), async function (req, res) {
  const userEvents = await Event.
    find({ day: req.params.date }).
    where('users').in([req.user._id])
  const friendEvents = await Event.
    find({ day: req.params.date }).
    where('users').in([req.params.user_id])
  res.json([...userEvents, ...friendEvents])
})

router.post('/events', passport.authenticate('jwt'), async function (req, res) {
  const event = await Event.create({ ...req.body, users: [req.user._id] })
  await User.findByIdAndUpdate(req.user._id, { $push: { events: event._id } })
  res.json(event)
})

router.put('/events/:id', passport.authenticate('jwt'), async function (req, res) {
  await Event.findByIdAndUpdate(req.params.id, { $set: req.body })
  res.sendStatus(200)
})

router.post('/events/delete/:id', passport.authenticate('jwt'), async function (req, res) {
  const users = req.body
  await Event.findByIdAndDelete(req.params.id)
  users.forEach(user => {
  User.findByIdAndUpdate(user._id, { $pull: { events: req.params.id } })
  }) 
  res.sendStatus(200)
})

// export router
module.exports = router