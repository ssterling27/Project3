import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Login from './pages/Auth/Login.js'
import Register from './pages/Auth/Register.js'
import Calendar from './pages/Calendar/Calendar.js'
import Home from './pages/Home/Home.js'
import AddFriend from './pages/AddFriend/AddFriend.js'
import Meetup from './pages/Meetup/Meetup.js'
import Activities from './pages/Activities/Activities.js'
import Navbar from './components/Navbar/Navbar.js'
import { useState, useEffect } from 'react'
import UserAPI from './utils/UserAPI'

function App() {
  const sendFriendRequest = (event) => {
    event.preventDefault()
    UserAPI.sendFriendRequest(event.target.id)
      .then(user => console.log('request made'))
      .catch(err => console.log(err))
  }
  const [friends, setFriends] = useState([])
  const [friendRequestState, setFriendRequestState] = useState([])
  const [meetupRequestState, setMeetupRequestState] = useState([])
  const [selectedFriendState, setSelectedFriendState] = useState({
    name: '',
    username: 'Select a Friend',
    id: ''
  })
  const incomingRequests = []
  useEffect(() => {
    UserAPI.getUser()
      .then(({ data }) => {
        console.log(data)
        setFriends(data.friends)

        // if (data.friendRequests.length > 0) {
        //   setFriendRequestState(data.friendRequests)
        // }
        
        data.friendRequests.map(friendRequest => {
          incomingRequests.push({ username: friendRequest.username, name: friendRequest.name, id: friendRequest._id})
        })
        // setFriendRequestState([{username: 'John'}, {username: 'Jack'}])
        setFriendRequestState([...incomingRequests])
        // setFriendRequestState(data.friendRequests)
        // setMeetupRequestState(data.meetupRequests)
      })
  }, [])

  // useEffect(() => {
    
  //   console.log(friendRequestState)
  // }, [])
  
  function removeHash() {
    window.history.pushState("", document.title, window.location.pathname
      + window.location.search);
  }
  
 
  if (window.location.pathname === 'calendar' || 'addfriend' || 'meetup' || 'activities') {
    let path = window.location.pathname.split('/')[1]
    window.location.hash = path
    setTimeout(() => removeHash(), 1000)
  }
  const [meetupFriendState, setMeetupFriendState] = useState({
    username: '',
    id: ''
  })
  
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/signIn'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route exact path={'/' | '/calendar' | '/addfriend' | '/meetup' | '/activities'} >
            <Navbar
            meetupFriendState={meetupFriendState}
            setMeetupFriendState={setMeetupFriendState}
            friends={friends}
            setFriends={setFriends}
            friendRequestState={friendRequestState}
            setFriendRequestState={setFriendRequestState}
            meetupRequestState={meetupRequestState}
            setMeetupRequestState={setMeetupRequestState}
            selectedFriendState={selectedFriendState}
            setSelectedFriendState={setSelectedFriendState}
            />
            <Home />
            <Route>
            <Calendar />
            </Route>
            <AddFriend
            friendRequestState={friendRequestState}
            setFriendRequestState={setFriendRequestState}
            friends={friends}
            sendFriendRequest={sendFriendRequest}
            />
            <Meetup />
            <Activities />
          </Route>
        </Switch>
      </div>
    </Router>
  )
  
}

export default App;
