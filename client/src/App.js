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
import { format, parse, getDay, startOfToday, addHours } from 'date-fns'
import { dateFnsLocalizer } from 'react-big-calendar'
import { LocalizationProvider } from '@mui/lab'
import startOfWeek from 'date-fns/startOfWeek';
const locales = {
  'en-US': require('date-fns/locale/en-US')
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})
function App() {
  const [allEvents, setAllEvents] = useState([])
  const [newEvent, setNewEvent] = useState({
    title: '',
    location: '',
    description: '',
    start: new Date(),
    end: addHours(new Date(), 1),
    day: format(new Date(), 'MM-dd-yyyy'),
    hours: []
  })
  const unavailableHours = []
  const [selectedDay, setSelectedDay] = useState(startOfToday())
  const [friendRequestSent, setFriendRequestSent] = useState(false)
  const openFriendRequestSent = () => setFriendRequestSent(true)
  const closeFriendRequestSent = () => setFriendRequestSent(false)
  const sendFriendRequest = (event) => {
    event.preventDefault()
    UserAPI.sendFriendRequest(event.target.id)
      .then(user => openFriendRequestSent())
      .catch(err => console.log(err))
  }
  
  const [friends, setFriends] = useState([])
  const [allMeetupRequests, setAllMeetupRequests] = useState([])
  const [friendRequestState, setFriendRequestState] = useState([])
  const [meetupRequestState, setMeetupRequestState] = useState([])
  const [selectedFriendState, setSelectedFriendState] = useState({
    name: '',
    username: 'Select a Friend',
    id: ''
  })
  const incomingRequests = []
  const incomingMeetupRequests = []
  useEffect(() => {
    UserAPI.getUser()
      .then(({ data }) => {
        console.log(data)
        setFriends(data.friends)
        data.friendRequests.map(friendRequest => {
          incomingRequests.push({ username: friendRequest.username, name: friendRequest.name, id: friendRequest._id })
        })
        data.meetupRequests.map(meetupRequest => {
          incomingMeetupRequests.push({ sentBy: meetupRequest.sentBy, title: meetupRequest.title, description: meetupRequest.description, start: new Date(meetupRequest.start), end: new Date(meetupRequest.end), location: meetupRequest.location, day: meetupRequest.day, hours: meetupRequest.hours, meetupid: meetupRequest._id })
        })
        // setFriendRequestState([{username: 'John'}, {username: 'Jack'}])
        setFriendRequestState([...incomingRequests])
        setAllMeetupRequests(incomingMeetupRequests)
        console.log(incomingMeetupRequests)
        // setFriendRequestState(data.friendRequests)
        // setMeetupRequestState(data.meetupRequests)
      })
  }, [])

  useEffect(() => {


  }, [])

  function removeHash() {
    window.history.pushState("", document.title, window.location.pathname
      + window.location.search);
  }


  if (window.location.pathname === 'calendar' || 'addfriend' || 'meetup' || 'activities') {
    let path = window.location.pathname.split('/')[1]
    window.location.hash = path
    setTimeout(() => removeHash(), 1000)
  }

  const [selectedMeetupRequest, setSelectedMeetupRequest] = useState({
    title: '',
    location: '',
    description: '',
    start: new Date(),
    end: addHours(new Date(), 1),
    day: format(new Date(), 'MM-dd-yyyy'),
    hours: [],
    sentBy: {}
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
              selectedMeetupRequest={selectedMeetupRequest}
              setSelectedMeetupRequest={setSelectedMeetupRequest}
              friends={friends}
              setFriends={setFriends}
              friendRequestState={friendRequestState}
              setFriendRequestState={setFriendRequestState}
              meetupRequestState={meetupRequestState}
              setMeetupRequestState={setMeetupRequestState}
              selectedFriendState={selectedFriendState}
              setSelectedFriendState={setSelectedFriendState}
              allMeetupRequests={allMeetupRequests}
              setAllMeetupRequests={setAllMeetupRequests}
              newEvent={newEvent}
              setNewEvent={setNewEvent}
              allEvents={allEvents}
              setAllEvents={setAllEvents}
            />
            <Home />
            <Route>
              <Calendar
                allEvents={allEvents}
                setAllEvents={setAllEvents}
                unavailableHours={unavailableHours}
                newEvent={newEvent}
                setNewEvent={setNewEvent} />
            </Route>
            <AddFriend
              friendRequestState={friendRequestState}
              setFriendRequestState={setFriendRequestState}
              friends={friends}
              sendFriendRequest={sendFriendRequest}
              friendRequestSent={friendRequestSent}
              setFriendRequestSent={setFriendRequestSent}
              openFriendRequestSent={openFriendRequestSent}
              closeFriendRequestSent={closeFriendRequestSent}
            />
            <Meetup
              selectedFriendState={selectedFriendState}
              setSelectedFriendState={setSelectedFriendState}
              friends={friends}
              allEvents={allEvents}
              setAllEvents={setAllEvents}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay} />
            <Activities />
          </Route>
        </Switch>
      </div>
    </Router>
  )

}

export default App;
