import React, { useEffect, useState } from 'react'
import { Button, Modal, Box, Typography, FormGroup, TextField, List, ListItem, ListItemText } from '@mui/material'

import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';

import UserAPI from '../../utils/UserAPI'
import axios from 'axios';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
  //  console.log(searchState)
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
  maxHeight: 400,
  bgcolor: 'white',
  border: '2px solid grey',
  p: 4,
  overflow: 'scroll'
 }

 return (
   <div style={{ margin: '2vw' }}>
     <Paper elevation={8} style={{ display: 'flex', justifyContent: 'center', color: 'black', opacity: '50%' }}>
       <h1>{currentUserState.username}: Add a friend</h1>
     </Paper>
     <br />
     <div style={{ display: 'flex', justifyContent: 'center' }}>
       <Button className='searchFriendBtn' variant="contained" style={{ backgroundColor: '#78797B', color: 'white', marginBottom: '2%' }} onClick={handleOpen}>Search Friend</Button>
     </div>
     <hr />
     <Grid container spacing={2} style={{ marginTop: '2%', opacity: '70%', color: 'black'}}>
       <Grid item xs={6} md={6}>
         <Paper elevation={8} style={{display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center', fontSize: '2rem'}}>
           Friends
         </Paper>
       </Grid>
       <Grid item xs={6} md={6}>
         <Paper elevation={8} style={{ display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center', fontSize: '2rem'}}>
           Friend Requests
         </Paper>
       </Grid>
     </Grid>

     <Grid container spacing={2} style={{marginTop: '2%', justifyContent: 'center', opacity: '70%', color: 'black'}}>
       <Grid item xs={6} md={6}>
         <Paper elevation={8} style={{ display: 'flex', justifyContent: 'center' }}>
           <List>
             {friends.map(friend => {
               return <ListItem style={{ marginBottom: '3%', marginTop: '2%', fontWeight: 'bold', borderRadius: '1.5%', background: '#ede8e8', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}}><ListItemText style={{ color: 'black' }} />Username: {friend.username} | Name: {friend.name}</ListItem>
             })}
           </List>
         </Paper>
       </Grid>
       <Grid item xs={6} md={6}>
         <Paper elevation={8} style={{ display: 'flex', justifyContent: 'center' }}>
           <List>
             {friendRequestState.map(friendRequest => {
               return <ListItem style={{ marginBottom: '3%', marginTop: '2%', fontWeight: 'bold', borderRadius: '1.5%', background: '#ede8e8', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)' }}><ListItemText style={{ color: 'black' }} />Username: {friendRequest.username} | Name: {friendRequest.name}</ListItem>
             })}
           </List>
         </Paper>
       </Grid>
     </Grid>

   <div style={{ display: 'flex', justifyContent: 'center' }}>
    {/* <Button variant="contained" onClick={handleOpen}>Search Friend</Button> */}
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
       <br />
       <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {userDetails.map(item => {
          return <ListItem style={{ marginLeft: '25%', marginRight: '25%', marginBottom: '4%', borderRadius: '1.5%', background: 'lightgrey', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}}><ListItemText style={{ color: 'black' }}>{item.username}</ListItemText><Button id={item._id} variant="contained" onClick={event => {
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