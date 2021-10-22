import * as React from 'react'
import { Box, Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { MoveToInbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material'
import { useState, useEffect } from 'react'
import FriendRequestModal from '../FriendRequestModal/FriendRequestModal.js'
import FriendInfoModal from '../FriendInfoModal/FriendInfoModal.js'
import MeetupRequestModal from '../MeetupRequestModal/MeetupRequestModal.js'




function Navbar({ selectedMeetupRequest, setSelectedMeetupRequest, friends, setFriends, friendRequestState, setFriendRequestState, meetupRequestState, setMeetupRequestState, selectedFriendState, setSelectedFriendState, allMeetupRequests, setAllMeetupRequests, newEvent, setNewEvent, allEvents, setAllEvents }) {
  function goHome(event) {
    document.getElementById("home").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
  }
  function goCalendar(event) {
    document.getElementById("calendar").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
  }
  function goAddFriend(event) {
    document.getElementById("addfriend").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
  }
  function goActivities() {
    document.getElementById("activities").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
  }
  function goMeetupPage() {
    document.getElementById("meetup").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
  }
 

  // function meetupFriend(event) {
  //   setMeetupFriendState({ username: event.target.childNodes[0].innerText || event.target.innerText, id: event.target.childNodes[0].id || event.target.id })
  //   // console.log(meetupFriendState)
  //   window.location.hash = 'meetup'
  // }
  
  const [friendOpen, setFriendOpen] = useState(false)
  const openFriendRequest = () => setFriendOpen(true)
  const closeFriendRequest = () => setFriendOpen(false)
  const [friendInfoOpen, setFriendInfoOpen] = useState(false)
  const openFriendModal = () => setFriendInfoOpen(true)
  const closeFriendModal = () => setFriendInfoOpen(false)
  const [meetupRequestOpen, setMeetupRequestOpen] = useState(false)
  const openMeetupRequest = () => setMeetupRequestOpen(true)
  const closeMeetupRequest = () => setMeetupRequestOpen(false)
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'white',
    border: '2px solid grey',
    p: 4
  }

  const [selectedRequestState, setSelectedRequestState] = useState({
    name: '',
    username: '',
    id: ''
  })
  
  const selectFriend = (username, id, name) => {
    setSelectedFriendState({
      name: name,
      username: username,
      id: id
    })
    openFriendModal()
  }
  const openRequestModal = (username, id, name) => {
    setSelectedRequestState({
      name: name,
      username: username,
      id: id
    })
    openFriendRequest()
  }
  const viewMeetupRequest = (meetupRequest) => {
    setSelectedMeetupRequest(meetupRequest)
    openMeetupRequest()
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: '8vw',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '8vw',
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography style={{ fontSize: '1.5vw' }}>
            Synergize
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          <ListItem button key='Home' onClick={goHome}>
            {/* <ListItemText primary='Home' /> */}
            <li primary='Home' style={{ fontSize: '1.2vw' }}>Home</li>
          </ListItem>
          <ListItem button key='Planner' onClick={goCalendar}>
            <li primary="Planner" style={{ fontSize: '1.2vw' }}>Planner</li>
          </ListItem>
          <ListItem key='Friends'>
            <li primary="Friends" style={{ fontSize: '1.2vw' }}>Friends</li>
          </ListItem>
          {friends.map(({username, _id, name}) => (<ListItem style={{ display: 'flex', justifyContent: 'flex-end' }} button onClick={() => selectFriend(username, _id, name)}><li primary={username} style={{ fontSize: '1vw' }}>{username}</li></ListItem>))}
          <FriendInfoModal
            friendInfoOpen={friendInfoOpen}
            setFriendInfoOpen={setFriendInfoOpen}
            openFriendModal={openFriendModal}
            closeFriendModal={closeFriendModal}
            modalStyle={modalStyle}
            selectedFriendState={selectedFriendState}
            setSelectedFriendState={setSelectedFriendState}
            friends={friends}
            setFriends={setFriends}
            goMeetupPage={goMeetupPage}/>
          <ListItem button key='Add Friend' onClick={goAddFriend}>
            <li primary="Add Friend" style={{ fontSize: '1.2vw' }}>Add Friend</li>
          </ListItem>
          <ListItem button key='Schedule Meetup' onClick={goMeetupPage}>
            <li primary="Schedule Meetup" style={{ fontSize: '1.2vw' }}>Schedule Meetup</li>
          </ListItem>
          <ListItem button key='Activities' onClick={goActivities}>
            <li primary="Activities" style={{ fontSize: '1.2vw' }}>Activities</li>
          </ListItem>
          <ListItem key='Friend Requests'>
            <li primary="friend requests" style={{ fontSize: '1.2vw' }}>Friend Requests</li>
          </ListItem>
          {friendRequestState.map(({ username, id, name }) => (
            <ListItem style={{ display: 'flex', justifyContent: 'flex-end' }} button onClick={() => openRequestModal(username, id, name)}><li style={{fontSize:'1vw'}}>{username}</li></ListItem>
          ))}
          <FriendRequestModal
            friendOpen={friendOpen}
            setFriendOpen={setFriendOpen}
            openFriendRequest={openFriendRequest}
            closeFriendRequest={closeFriendRequest}
            modalStyle={modalStyle}
            selectedRequestState={selectedRequestState}
            setSelectedRequestState={setSelectedRequestState}
            friendRequestState={friendRequestState}
            setFriendRequestState={setFriendRequestState}
            friends={friends}
            setFriends={setFriends} />
          <ListItem key='Meetup Requests'>
            <li primary="Meetup requests" style={{ fontSize: '1.2vw' }}>Meetup Requests</li>
          </ListItem>
          {allMeetupRequests.map(meetupRequest => (<ListItem style={{ display: 'flex', justifyContent: 'flex-end' }} button onClick={() => viewMeetupRequest(meetupRequest)}><li style={{ fontSize: '1vw' }}>{meetupRequest.sentBy.username}</li></ListItem>))}
          <MeetupRequestModal
            meetupRequestOpen={meetupRequestOpen}
            setMeetupRequestOpen={setMeetupRequestOpen}
            openMeetupRequest={openMeetupRequest}
            closeMeetupRequest={closeMeetupRequest}
            modalStyle={modalStyle}
            selectedMeetupRequest={selectedMeetupRequest}
            setSelectedMeetupRequest={setSelectedMeetupRequest}
            allMeetupRequests={allMeetupRequests}
            setAllMeetupRequests={setAllMeetupRequests}
            newEvent={newEvent}
            setNewEvent={setNewEvent}
            allEvents={allEvents}
            setAllEvents={setAllEvents} />

          {/* {['Home', 'Planner', 'Friends', 'Add Friend', 'Activities'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
        </List>
      </Drawer>
    </Box>
  )
}

export default Navbar