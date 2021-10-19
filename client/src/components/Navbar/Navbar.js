import * as React from 'react'
import { Box, Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { MoveToInbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material'
import { useState, useEffect } from 'react'
import FriendRequestModal from '../FriendRequestModal/FriendRequestModal.js'
import FriendInfoModal from '../FriendInfoModal/FriendInfoModal.js'




function Navbar ({meetupFriendState, setMeetupFriendState, friends, setFriends, friendRequestState, setFriendRequestState, meetupRequestState, setMeetupRequestState}) {
  function goHome (event) {
    window.location.hash = 'home'
  }
  function goCalendar (event) {
    window.location.hash = 'calendar'
  }
  function goAddFriend (event) {
    window.location.hash = 'addfriend'
  }
  function goActivities () {
    window.location.hash = 'activities'
  }

  
  function meetupFriend (event) {
    setMeetupFriendState({username: event.target.childNodes[0].innerText || event.target.innerText, id: event.target.childNodes[0].id || event.target.id})
    // console.log(meetupFriendState)
    window.location.hash = 'meetup'
  }

    const [friendOpen, setFriendOpen] = useState(false)
    const openFriendRequest = () => setFriendOpen(true)
    const closeFriendRequest = () => setFriendOpen(false)
    const [friendInfoOpen, setFriendInfoOpen] = useState(false)
    const openFriendModal = () => setFriendInfoOpen(true)
    const closeFriendModal = () => setFriendInfoOpen(false)

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

  console.log(friendRequestState)
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
        <Toolbar style={{display: 'flex', justifyContent: 'center'}}>
          <Typography style={{fontSize: '1.5vw'}}>
          Synergize
        </Typography>
        </Toolbar>
        <Divider />
        <List>
          <ListItem button key='Home' onClick={goHome}>
            {/* <ListItemText primary='Home' /> */}
            <li primary='Home' style={{fontSize: '1.2vw'}}>Home</li>
          </ListItem>
          <ListItem button key='Planner' onClick={goCalendar}>
            <li primary="Planner" style={{ fontSize: '1.2vw' }}>Planner</li>
          </ListItem>
          <ListItem key='Friends'>
            <li primary="Friends" style={{ fontSize: '1.2vw' }}>Friends</li>
          </ListItem>
          {friends.map(friend => (<><ListItem style={{display: 'flex', justifyContent: 'flex-end'}} button onClick={openFriendModal}><li primary={friend.username} style={{fontSize: '1vw'}}>{friend.username}</li></ListItem>
          <FriendInfoModal
            friendInfoOpen={friendInfoOpen}
            setFriendInfoOpen={setFriendInfoOpen}
            openFriendModal={openFriendModal}
            closeFriendModal={closeFriendModal}
            modalStyle={modalStyle}
            username={friend.username}
            user_id={friend._id}
            friends={friends}
            setFriends={setFriends} />
          </>))}
          <ListItem button key='Add Friend' onClick={goAddFriend}>
            <li primary="Add Friend" style={{ fontSize: '1.2vw' }}>Add Friend</li>
          </ListItem>
          <ListItem button key='Activities' onClick={goActivities}>
            <li primary="Activities" style={{ fontSize: '1.2vw' }}>Activities</li>
          </ListItem>
          <ListItem key='Friend Requests'>
            <li primary="friend requests" style={{fontSize: '1.2vw'}}>Friend Requests</li>
          </ListItem>
          {friendRequestState.map(({ username, id, name}, index) => (
          <FriendRequestModal
            friendOpen={friendOpen}
            setFriendOpen={setFriendOpen}
            openFriendRequest={openFriendRequest}
            closeFriendRequest={closeFriendRequest}
            modalStyle={modalStyle}
            username={username}
            user_id={id}
            friendRequestState={friendRequestState}
            setFriendRequestState={setFriendRequestState}
            friends={friends}
            setFriends={setFriends} />))}
          <ListItem key='Meetup Requests'>
            <li primary="Meetup requests" style={{ fontSize: '1.2vw' }}>Meetup Requests</li>
          </ListItem>
          {/* {meetupRequestState.map(meetupRequest => (<ListItem style={{ display: 'flex', justifyContent: 'flex-end' }} button><li style={{ fontSize: '1vw' }}>{meetupRequest.username}</li></ListItem>))} */}
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