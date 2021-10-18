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
  const [friends, setFriends] = useState([])
  const [friendRequestState, setFriendRequestState] = useState([])
  const [meetupRequestState, setMeetupRequestState] = useState([])
  useEffect(() => {
    UserAPI.getUser()
      .then(({ data }) => {
        console.log(data)
        setFriends(data.friends)
        // if (data.friendRequests.length > 0) {
        //   setFriendRequestState(data.friendRequests)
        // }
        
        data.friendRequests.map(friendRequest => {
          setFriendRequestState([...friendRequestState, {name: friendRequest.name, username: friendRequest.username, id: friendRequest._id}])
          console.log(friendRequest)
        })
        console.log(friendRequestState)
        // setMeetupRequestState(data.meetupRequests)
      })
  }, [])

  function removeHash() {
    window.history.pushState("", document.title, window.location.pathname
      + window.location.search);
  }
  
 
  if (window.location.pathname.length > 1) {
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
          <Route exact path={'/' | '/calendar' | '/addfriend' | '/meetup' | '/activities'} >
            <Navbar
            meetupFriendState={meetupFriendState}
            setMeetupFriendState={setMeetupFriendState}
            friends={friends}
            setFriends={setFriends}
            friendRequestState={friendRequestState}
            setFriendRequestState={setMeetupFriendState}
            meetupRequestState={meetupRequestState}
            setMeetupRequestState={setMeetupRequestState}
            />
            <Home />
            <Route>
            <Calendar />
            </Route>
            <AddFriend
            friendRequestState={friendRequestState}
            setFriendRequestState={setFriendRequestState}
            friends={friends}
            />
            <Meetup />
            <Activities />
          </Route>
          <Route path='/signIn'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  )
  
}

export default App;
