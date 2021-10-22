import React, { useEffect, useState } from 'react'
import { Button, Modal, Box, Typography, FormGroup, TextField, List, ListItem, ListItemText } from '@mui/material'

import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';

import UserAPI from '../../utils/UserAPI'
import axios from 'axios';


function FriendSearchForm({
  friends,
  friendRequestState,
  setFriendRequestState,
  sendFriendRequest,
  friendRequestSent,
  setFriendRequestSent,
  openFriendRequestSent,
  closeFriendRequestSent
}) {

 const [open, setOpen] = useState(false)
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

//  for the search friends query
 const [searchState, setSearchState] = useState('')
 const [userDetails, setUserDetails] = useState([])

 const [currentUserState, setCurrentUserState ] = useState([])

//  search friend query
 const searchUsers = (query) => {
   setSearchState(query)
   console.log(searchState)
   UserAPI.searchFriend(JSON.stringify({query: query}))
    .then(res => setUserDetails(res.data.user))
    .catch(err => console.log(err))
 }

  useEffect(() => {
    UserAPI.getUser()
      .then(( { data: { _id, name, username }} ) => setCurrentUserState({ ...currentUserState, _id: _id, name: name, username: username }))
      // .catch(console.log('error'))
      .catch(err => window.location = 'signIn')
  }, [])
  
 const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'white',
  border: '2px solid grey',
  p: 4,
 }

 return (
   <div style={{ margin: '2vw' }}>
  <h1>Current Signed In User:</h1>
  <h3>Profile ID: {currentUserState._id}</h3>
  <h3>Profile Username: {currentUserState.username}</h3>
  <h3>Profile Name: {currentUserState.name}</h3>
  <h1> Friends: </h1>
  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {friends.map(friend => {
      return <ListItem style={{ marginLeft: '25%', marginRight: '25%' }}><ListItemText style={{ color: 'black' }} />Username: {friend.username} / Name: {friend.name} / ID: {friend._id}</ListItem>
    })}
  </List>
  <h1> Friend Requests: </h1>
  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {friendRequestState.map(friendRequest => {
      return <ListItem style={{ marginLeft: '25%', marginRight: '25%' }}><ListItemText style={{ color: 'black' }} />Username: {friendRequest.username} / Name: {friendRequest.name} / ID: {friendRequest.id}</ListItem>
    })}
  </List>
   <h2 style={{ display: 'flex', justifyContent: 'center' }}>Search Friend</h2>
   <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Button variant="contained" onClick={handleOpen}>Search Friend</Button>
    <Modal
     open={open}
     onClose={handleClose}
     aria-labbeledby='modal-modal-title'
     aria-describedby='modal-modal-description'>
     <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'flex', justifyContent: 'center' }}>Add Friend</Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
       <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <TextField variant="outlined" type="text" value={searchState} onChange={(e) => searchUsers(e.target.value)} label="Query Username" style={{ width: '45%' }} />
       </div>
       <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {userDetails.map(item => {
          return <ListItem style={{ marginLeft: '25%', marginRight: '25%' }}><ListItemText style={{ color: 'black' }}>{item.username}</ListItemText><Button id={item._id} variant="contained" onClick={event => {
            handleClose()
            sendFriendRequest(event)}}>Add Friend</Button></ListItem>
        })}
       </List>
       <div style={{ display: 'flex', justifyContent: 'center' }}>
       </div>
      </Typography>
     </Box>
    </Modal>
   </div>
     <Modal
       open={friendRequestSent}
       onClose={closeFriendRequestSent}
       aria-labbeledby='modal-modal-title'
       aria-describedby='modal-modal-description'>
       <Box sx={style}>
         <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'flex', justifyContent: 'center' }}>Your Friend Request has been sent! They'll show up in your Friends list if they accept.</Typography>
         <Typography>
           <div style={{ display: 'flex', justifyContent: 'center' }}>
             <Button variant="outlined" color="success" style={{ marginTop: '20px' }} onClick={closeFriendRequestSent}>Got it</Button>
           </div>
         </Typography>
       </Box>
     </Modal>
  </div>
 )
}

export default FriendSearchForm