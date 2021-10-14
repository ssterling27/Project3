// bringing in all the required stuff
require('dotenv').config()

const express = require('express')
const { join } = require('path')
const passport = require('passport')
const { Strategy: LocalStrategy } = require('passport-local')
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')

const { User } = require('./models')
const syncDB = require('./db')

const app = express()

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
}, ({ id }, cb) => User.findById(id)
  // line below is the only one you have to change for project
  .populate('events')
  .populate('friends')
  .then(user => cb(null, user))
  .catch(err => cb(err))))

app.use(require('./routes'))

// app.get('/test', (req, res) => {
//   res.json('string of test')
// })

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'client', 'build', 'index.html'))
  })
}

// app.get('*', (req, res) => {
//   res.sendFile(join(__dirname, 'client', 'build', 'index.html'))
// })

syncDB()
  .then(() => app.listen(process.env.PORT || 3001))
  .catch(err => console.log(err))
