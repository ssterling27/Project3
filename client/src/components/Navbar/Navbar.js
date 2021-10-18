import * as React from 'react'
import { Box, Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { MoveToInbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material'
import { useState, useEffect } from 'react'




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
          {friends.map(friend => (<ListItem style={{display: 'flex', justifyContent: 'flex-end'}} button onClick={meetupFriend}><li primary={friend.username} style={{fontSize: '1vw'}} id={friend._id}>{friend.username}</li></ListItem>))}
          <ListItem button key='Add Friend' onClick={goAddFriend}>
            <li primary="Add Friend" style={{ fontSize: '1.2vw' }}>Add Friend</li>
          </ListItem>
          <ListItem button key='Activities' onClick={goActivities}>
            <li primary="Activities" style={{ fontSize: '1.2vw' }}>Activities</li>
          </ListItem>
          <ListItem key='Friend Requests'>
            <li primary="friend requests" style={{fontSize: '1.2vw'}}>Friend Requests</li>
          </ListItem>
          {/* {friendRequestState.map(friendRequest => (<ListItem style={{display:'flex', justifyContent: 'flex-end'}} button><li style={{fontSize:'1vw'}}>{friendRequest.username}</li></ListItem>))} */}
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