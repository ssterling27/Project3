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

// register a new user (username to lowercase to check for duplicates and place in db)
router.post('/users/register', (req, res) => {
 // set the req.body and username to be lowercase to prevent duplicate usernames
 const { name, username, password } = req.body
 const usernameLowerCase = req.body.username.toLowerCase()

 // variable to set registration status messages to check for blanks
 let registrationStatus = { nameMsg: '', usernameMsg: '', passwordMsg: '' }

 // if the name, username, or password length is less than one (blank) then set the registration status with the messages
 name.length < 1 && (registrationStatus.nameMsg = 'Name cannot be blank')
 username.length < 1 && (registrationStatus.usernameMsg = 'Username cannot be blank')
 password.length < 1 && (registrationStatus.passwordMsg = 'Password cannot be blank')

 // find all registered users and push the usernames into the registeredusernames array
 let registeredUserNames = []
 User.find({})
  .then(users => {
    users.forEach(user => {
      registeredUserNames.push(user.username)
    })
  })
  .catch(err => console.log(err))

 // if there is a registration status (if blank from above) then unable to register
 if (registrationStatus.nameMsg || registrationStatus.usernameMsg || registrationStatus.passwordMsg) {
  res.json({ status: registrationStatus, regMessage: 'Unsuccessful. Input blank' })
 } 
 // else, register the new user (name, lowercase username, and password). If error, the lowercase username exists and not register. Else register user
 else { User.register(new User({ name, username: usernameLowerCase }), req.body.password, err => {
    if (err) { 
      registeredUserNames.indexOf(username) !== -1 && (registrationStatus.username = 'Username already exists')
      res.json({ status: registrationStatus, message: 'Registration unsuccessful. Username already exists.', err})
      return
    }
    else { res.sendStatus(200) }
   })
 }
})

// login a user
router.post('/users/login', (req, res) => {
  User.authenticate()(req.body.username.toLowerCase(), req.body.password, (err, user) => {
    if (err) { console.log(err) }
    res.json(user ? jwt.sign({ id: user._id }, process.env.SECRET) : null)
  })
})


router.put('/users/requestAddFriend/:id', passport.authenticate('jwt'), async function (req, res) {
  // await User.findByIdAndUpdate(req.user._id, { $push: { friendRequests: req.params.id } })
  await User.findByIdAndUpdate(req.params.id, { $push: { friendRequests: req.user._id } })
  res.sendStatus(200)
})

router.put('/users/requestRemoveFriend/:id', passport.authenticate('jwt'), async function (req, res) {
  await User.findByIdAndUpdate(req.user._id, { $pull: { friendRequests: req.params.id } })
  // await User.findByIdAndUpdate(req.params.id, { $pull: { friendRequests: req.user._id } })
  res.sendStatus(200)
})

// add friends


router.post('/users/addFriend/:id', passport.authenticate('jwt'), async function (req, res) {
  await User.findByIdAndUpdate(req.user._id, { $push: { friends: req.params.id }})
  await User.findByIdAndUpdate(req.user._id, { $pull: { friendRequests: req.params.id }})
  await User.findByIdAndUpdate(req.params.id, { $push: { friends: req.user._id }})
  const friend = await User.findById(req.params.id)
  res.json(friend)
})

router.post('/users/removeFriend/:id', passport.authenticate('jwt'), async function (req, res) {
  await User.findByIdAndUpdate(req.user._id, { $pull: { friends: req.params.id } })
  await User.findByIdAndUpdate(req.params.id, { $pull: { friends: req.user._id } })
  res.sendStatus(200)
})

router.get('/users/friends/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    const friends = await Promise.all(
      user.friends.map(friend => {
        return User.findById(friend)
      })
    )
    let friendList = []
    friends.map((friend) => {
      const {_id, name, username} = friend
      friendList.push({ _id, name, username })
    })
    res.status(200).json(friendList)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/users/requestFriends/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    const friendRequests = await Promise.all(
      user.friendRequests.map(friendRequest => {
        return User.findById(friendRequest)
      })
    )
    let friendRequestList = []
    friendRequests.map((friendRequest) => {
      const {_id, name, username} = friendRequest
      friendRequestList.push({ _id, name, username })
    })
    res.status(200).json(friendRequestList)
  } catch (err) {
    res.status(500).json(err)
  }
})

// search users - passport auth? 
router.post('/users/search', passport.authenticate('jwt'),(req, res) => {
  let userSearchPattern = new RegExp('^' + req.body.query)
  User.find({ username: { $regex: userSearchPattern } })
    .select("_id username")
    .then(user => { res.json({ user }) })
    .catch(err => { console.log(err) })
})

// 6169b839d5102ff02f27939f

router.get('/usernames', (req, res) => {
  // find all users
  User.find({})
    .then(users => {
      // assign usernames to an empty array and push each user to array
      let usernames = []
      users.forEach(user => { usernames.push(user.username)})
      res.json(usernames)
    })
    .catch(err => console.log(err))
})

// export router
module.exports = router