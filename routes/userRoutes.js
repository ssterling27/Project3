const router = require('express').Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

// get user data
router.get('/user', passport.authenticate('jwt'), (req, res) => res.json(req.user))

// get all users (not password auth)
router.get('/users', (req, res) => {
 User.find({})
  .then(user => res.json(user))
  .catch(err => console.log(err))
})

// register a new user
router.post('/users/register', (req, res) => {
 const { name, username } = req.body
 User.register(new User({ name, username }), req.body.password, err => {
  if (err) { console.log(err) }
  res.sendStatus(200)
 })
})

// login a user
router.post('/users/login', (req, res) => {
 User.authenticate()(req.body.username, req.body.password, (err, user) => {
  if (err) { console.log(err) }
  res.json(user ? jwt.sign({ id: user._id }, process.env.SECRET) : null)
 })
})

// export router
module.exports = router