import React from 'react'
import { Box, Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText, Hidden, IconButton } from '@mui/material'
import PropTypes from 'prop-types'
import { Mail as MailIcon, MenuRounded as MenuIcon } from '@mui/icons-material'
import { useState, useEffect } from 'react'
import FriendRequestModal from '../FriendRequestModal/FriendRequestModal.js'
import FriendInfoModal from '../FriendInfoModal/FriendInfoModal.js'
import MeetupRequestModal from '../MeetupRequestModal/MeetupRequestModal.js'
import { withStyles } from '@mui/styles'
import Grid from '@mui/material/Grid/Grid'
import SoloLogo from '../../images/logoOnly.png'
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home'
import Calendar from '../../pages/Calendar/Calendar.js'
import Parallax from '../../pages/Parallax/Parallax.js'
import Home from '../../pages/Home/Home.js'
import AddFriend from '../../pages/AddFriend/AddFriend.js'
import Meetup from '../../pages/Meetup/Meetup.js'
import Activities from '../../pages/Activities/Activities.js'
import './Testbar.css'
import logoLetters from '../../images/logoletters.png'

const drawerWidth = 240;

function Navbar({window: props, selectedMeetupRequest, setSelectedMeetupRequest, friends, setFriends, friendRequestState, setFriendRequestState, meetupRequestState, setMeetupRequestState, selectedFriendState, setSelectedFriendState, allMeetupRequests, setAllMeetupRequests, newEvent, setNewEvent, allEvents, setAllEvents, unavailableHours, selectedDay, setSelectedDay, friendRequestSent, setFriendRequestSent, openFriendRequestSent, closeFriendRequestSent, sendFriendRequest}) {
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
  function logOut() {
    localStorage.removeItem('token')
    window.location = '/signIn'
  }

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
    width: '90vw',
    maxWidth: 600,
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
  const barStyle = {
    container: isRowBased => ({
      display: isRowBased ? 'none' : '',
      marginBottom: isRowBased ? '-60px' : '0px',
      minHeight: '0px',
      backgroundColor: 'rgb(192, 188, 243)',
      height: '40px'
    })
  }
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const mediaMatch = window.matchMedia('(min-width: 600px')
  const [matches, setMatches] = useState(mediaMatch.matches)
  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  }, [mediaMatch]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const drawer = (
    <div>
      <Typography sx={{display: 'flex', justifyContent: 'center'}}>
          <img src={SoloLogo} style={{width: '60%', padding: '10px'}} alt={'Synergize Logo'}/>
      </Typography>
      <Divider />
      <List>
          <ListItem button key='Home' onClick={goHome}>
            {/* <ListItemText primary='Home' /> */}
            <li primary='Home'>{<HomeIcon />} </li>
          </ListItem>
          <ListItem button key='Calendar' onClick={goCalendar}>
            <li primary="Calendar">Calendar</li>
          </ListItem>
          <ListItem key='Friends'>
            <li primary="Friends">Friends</li>
          </ListItem>
          {friends.map(({username, _id, name}) => (<ListItem style={{ display: 'flex', justifyContent: 'flex-end' }} button onClick={() => selectFriend(username, _id, name)}><li primary={username}>{username}</li></ListItem>))}
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
            <li primary="Add Friend">Add Friend</li>
          </ListItem>
          <ListItem button key='Schedule Meetup' onClick={goMeetupPage}>
            <li primary="Schedule Meetup">Schedule Meetup</li>
          </ListItem>
          <ListItem button key='Activities' onClick={goActivities}>
            <li primary="Activities">Activities</li>
          </ListItem>
          <ListItem key='Friend Requests'>
            <li primary="friend requests">Friend Requests</li>
          </ListItem>
          {friendRequestState.map(({ username, id, name }) => (
            <ListItem style={{ display: 'flex', justifyContent: 'flex-end' }} button onClick={() => openRequestModal(username, id, name)}><li>{username}</li></ListItem>
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
            <li primary="Meetup requests">Meetup Requests</li>
          </ListItem>
          {allMeetupRequests.map(meetupRequest => (<ListItem style={{ display: 'flex', justifyContent: 'flex-end' }} button onClick={() => viewMeetupRequest(meetupRequest)}><li>{meetupRequest.sentBy.username}</li></ListItem>))}
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
            </List>
      <Divider />
      <List>
        <ListItem button key='logOut' onClick={logOut}>
          <li primary='LogOut'>{<LogoutIcon />} </li>
        </ListItem>
      </List>
    </div>
  );

  const container = props !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={barStyle.container(matches)}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ color: 'hsla(217, 100%, 50%, 1)'}}/>
          </IconButton>
          <div style={{width: '30%', marginLeft: '25%'}}>
          <img src={logoLetters} style={{ width: '-webkit-fill-available', marginTop: '17px'}} alt={'Synergize'}></img>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar sx={{minHeight: '0'}} />
        <Parallax />
        <Home />
        <Calendar
          allEvents={allEvents}
          setAllEvents={setAllEvents}
          unavailableHours={unavailableHours}
          newEvent={newEvent}
          setNewEvent={setNewEvent} />
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
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
