// import React from 'react'
// import { Box, Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText, Hidden } from '@mui/material'
// import PropTypes from 'prop-types'
// import { MoveToInbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material'
// import { useState, useEffect } from 'react'
// import FriendRequestModal from '../FriendRequestModal/FriendRequestModal.js'
// import FriendInfoModal from '../FriendInfoModal/FriendInfoModal.js'
// import MeetupRequestModal from '../MeetupRequestModal/MeetupRequestModal.js'
// import { withStyles } from '@mui/styles'
// import Grid from '@mui/material/Grid/Grid'

// import LogoutIcon from '@mui/icons-material/Logout';
// import HomeIcon from '@mui/icons-material/Home';

// const drawerWidth = 300
// const styles = theme => ({
//   root: {
//     // display: "flex"
//   },
//   drawer: {
//     [theme.breakpoints.up("sm")]: {
//       width: drawerWidth,
//       flexShrink: 0
//     }
//   },
//   appBar: {
//     marginLeft: drawerWidth,
//     [theme.breakpoints.up("sm")]: {
//       width: `calc(100% - ${drawerWidth}px)`
//     }
//   },
//   menuButton: {
//     marginRight: 20,
//     [theme.breakpoints.up("sm")]: {
//       display: "none"
//     }
//   },
//   toolbar: theme.mixins.toolbar,
//   drawerPaper: {
//     width: drawerWidth
//   },
//   content: {
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: drawerWidth,
//       width: `calc(100% - ${drawerWidth}px)`
//     }
//   }
// }); 

// class Navbar extends React.Component ({ selectedMeetupRequest, setSelectedMeetupRequest, friends, setFriends, friendRequestState, setFriendRequestState, meetupRequestState, setMeetupRequestState, selectedFriendState, setSelectedFriendState, allMeetupRequests, setAllMeetupRequests, newEvent, setNewEvent, allEvents, setAllEvents }) {
  // state = {
  //   mobileOpen: false
  // };
  
  // handleDrawerToggle = () => {
  //   this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  // };

  // function goHome(event) {
  //   document.getElementById("home").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
  // }
  // function goCalendar(event) {
  //   document.getElementById("calendar").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
  // }
  // function goAddFriend(event) {
  //   document.getElementById("addfriend").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
  // }
  // function goActivities() {
  //   document.getElementById("activities").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
  // }
  // function goMeetupPage() {
  //   document.getElementById("meetup").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
  // }
  // function logOut() {
  //   localStorage.removeItem('token')
  //   window.location = '/signIn'
  // }
 
  
  
  
  // const [friendOpen, setFriendOpen] = useState(false)
  // const openFriendRequest = () => setFriendOpen(true)
  // const closeFriendRequest = () => setFriendOpen(false)
  // const [friendInfoOpen, setFriendInfoOpen] = useState(false)
  // const openFriendModal = () => setFriendInfoOpen(true)
  // const closeFriendModal = () => setFriendInfoOpen(false)
  // const [meetupRequestOpen, setMeetupRequestOpen] = useState(false)
  // const openMeetupRequest = () => setMeetupRequestOpen(true)
  // const closeMeetupRequest = () => setMeetupRequestOpen(false)
  // const modalStyle = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 600,
  //   bgcolor: 'white',
  //   border: '2px solid grey',
  //   p: 4
  // }

  // const [selectedRequestState, setSelectedRequestState] = useState({
  //   name: '',
  //   username: '',
  //   id: ''
  // })
  
  // const selectFriend = (username, id, name) => {
  //   setSelectedFriendState({
  //     name: name,
  //     username: username,
  //     id: id
  //   })
  //   openFriendModal()
  // }
  // const openRequestModal = (username, id, name) => {
  //   setSelectedRequestState({
  //     name: name,
  //     username: username,
  //     id: id
  //   })
  //   openFriendRequest()
  // }
  // const viewMeetupRequest = (meetupRequest) => {
  //   setSelectedMeetupRequest(meetupRequest)
  //   openMeetupRequest()
  // }

//   render() {
//   const { classes, theme } = this.props;
//   const drawer = (
//     <div>
//       <div className={classes.toolbar} />
//       <Divider />
//       <List>
//         {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {["All mail", "Trash", "Spam"].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar position="fixed" className={classes.appBar}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="Open drawer"
//             onClick={this.handleDrawerToggle}
//             className={classes.menuButton}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" color="inherit" noWrap>
//             Responsive drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <nav className={classes.drawer}>
//         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//         <Hidden smUp implementation="css">
//           <Drawer
//             container={this.props.container}
//             variant="temporary"
//             anchor={theme.direction === "rtl" ? "right" : "left"}
//             open={this.state.mobileOpen}
//             onClose={this.handleDrawerToggle}
//             classes={{
//               paper: classes.drawerPaper
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </Hidden>
//         <Hidden xsDown implementation="css">
//           <Drawer
//             classes={{
//               paper: classes.drawerPaper
//             }}
//             variant="permanent"
//             open
//           >
//             {drawer}
//           </Drawer>
//         </Hidden>
//       </nav>
//       <main className={classes.content}>
//         <div className={classes.toolbar} />
//         {this.props.children}
//       </main>
//     </div>
//   );
// }
//   }
//   // return (
//   //   <div style={{width: 'inherit'}}>
//   //   <Box style={{width: 'inherit'}}>
//   //     <CssBaseline />
//   //     <Drawer
//   //       sx={{
//   //         width: 'inherit',
//   //         '& .MuiDrawer-paper': {
//   //           width: `${(document.getElementsByClassName('MuiGrid-grid-xs-1').width)}`
//   //         },
//   //       }}
//   //       variant="permanent"
//   //     >
//   //       <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
//   //         <Typography style={{ fontSize: '1.5vw' }}>
//   //           Synergize
//   //         </Typography>
//   //       </Toolbar>
//   //       <Divider />
        // <List>
        //   <ListItem button key='Home' onClick={goHome}>
        //     {/* <ListItemText primary='Home' /> */}
        //     <li primary='Home'>{<HomeIcon />} </li>
        //   </ListItem>
        //   <ListItem button key='Planner' onClick={goCalendar}>
        //     <li primary="Planner">Planner</li>
        //   </ListItem>
        //   <ListItem key='Friends'>
        //     <li primary="Friends">Friends</li>
        //   </ListItem>
        //   {friends.map(({username, _id, name}) => (<ListItem style={{ display: 'flex', justifyContent: 'flex-end' }} button onClick={() => selectFriend(username, _id, name)}><li primary={username} style={{ fontSize: '1vw' }}>{username}</li></ListItem>))}
        //   <FriendInfoModal
        //     friendInfoOpen={friendInfoOpen}
        //     setFriendInfoOpen={setFriendInfoOpen}
        //     openFriendModal={openFriendModal}
        //     closeFriendModal={closeFriendModal}
        //     modalStyle={modalStyle}
        //     selectedFriendState={selectedFriendState}
        //     setSelectedFriendState={setSelectedFriendState}
        //     friends={friends}
        //     setFriends={setFriends}
        //     goMeetupPage={goMeetupPage}/>
        //   <ListItem button key='Add Friend' onClick={goAddFriend}>
        //     <li primary="Add Friend">Add Friend</li>
        //   </ListItem>
        //   <ListItem button key='Schedule Meetup' onClick={goMeetupPage}>
        //     <li primary="Schedule Meetup">Schedule Meetup</li>
        //   </ListItem>
        //   <ListItem button key='Activities' onClick={goActivities}>
        //     <li primary="Activities">Activities</li>
        //   </ListItem>
        //   <ListItem key='Friend Requests'>
        //     <li primary="friend requests">Friend Requests</li>
        //   </ListItem>
        //   {friendRequestState.map(({ username, id, name }) => (
        //     <ListItem style={{ display: 'flex', justifyContent: 'flex-end' }} button onClick={() => openRequestModal(username, id, name)}><li>{username}</li></ListItem>
        //   ))}
        //   <FriendRequestModal
        //     friendOpen={friendOpen}
        //     setFriendOpen={setFriendOpen}
        //     openFriendRequest={openFriendRequest}
        //     closeFriendRequest={closeFriendRequest}
        //     modalStyle={modalStyle}
        //     selectedRequestState={selectedRequestState}
        //     setSelectedRequestState={setSelectedRequestState}
        //     friendRequestState={friendRequestState}
        //     setFriendRequestState={setFriendRequestState}
        //     friends={friends}
        //     setFriends={setFriends} />
        //   <ListItem key='Meetup Requests'>
        //     <li primary="Meetup requests">Meetup Requests</li>
        //   </ListItem>
        //   {allMeetupRequests.map(meetupRequest => (<ListItem style={{ display: 'flex', justifyContent: 'flex-end' }} button onClick={() => viewMeetupRequest(meetupRequest)}><li>{meetupRequest.sentBy.username}</li></ListItem>))}
        //   <MeetupRequestModal
        //     meetupRequestOpen={meetupRequestOpen}
        //     setMeetupRequestOpen={setMeetupRequestOpen}
        //     openMeetupRequest={openMeetupRequest}
        //     closeMeetupRequest={closeMeetupRequest}
        //     modalStyle={modalStyle}
        //     selectedMeetupRequest={selectedMeetupRequest}
        //     setSelectedMeetupRequest={setSelectedMeetupRequest}
        //     allMeetupRequests={allMeetupRequests}
        //     setAllMeetupRequests={setAllMeetupRequests}
        //     newEvent={newEvent}
        //     setNewEvent={setNewEvent}
        //     allEvents={allEvents}
        //     setAllEvents={setAllEvents} />

//   //         {/* {['Home', 'Planner', 'Friends', 'Add Friend', 'Activities'].map((text, index) => (
//   //           <ListItem button key={text}>
//   //             <ListItemIcon>
//   //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//   //             </ListItemIcon>
//   //             <ListItemText primary={text} />
//   //           </ListItem>
//   //         ))} */}
//   //         <hr />
//   //         <ListItem button key='logOut' onClick={logOut}>
//   //           {/* <ListItemText primary='Home' /> */}
//   //           <li primary='LogOut'>{<LogoutIcon />} </li>
//   //         </ListItem>
//   //       </List>
//   //     </Drawer>
//   //   </Box>
//   //   </div>
//   // )
// Navbar.PropTypes = {
//   classes: PropTypes.object.isRequired,
//   container: PropTypes.object,
//   theme: PropTypes.object.isRequired
// }

// export default withStyles(styles, { withTheme: true })(Navbar);