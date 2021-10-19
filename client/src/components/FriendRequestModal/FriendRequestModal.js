import { Button, Modal, Box, Typography, TextField, ListItem } from '@mui/material'
import React, { useState, useEffect } from 'react'
import UserAPI from '../../utils/UserAPI'

function FriendRequestModal ({
  friendOpen,
  setFriendOpen,
  openFriendRequest,
  closeFriendRequest,
  modalStyle,
  username,
  user_id,
  friendRequestState,
  setFriendRequestState,
  friends,
  setFriends
}) {
  const addFriend = () => {
    UserAPI.addFriend(user_id)
      .then(({ data }) => {
        setFriends([...friends, data])
        console.log(data)
      })
    closeFriendRequest()
    setFriendRequestState(friendRequestState.filter(friendrequest => friendrequest.id !== user_id))
  }
  const denyFriendRequest = () => {
    UserAPI.denyFriendRequest(user_id)
    closeFriendRequest()
    setFriendRequestState(friendRequestState.filter(friendrequest => friendrequest.id !== user_id))
  }
  return (
    <div>
    <ListItem style={{display:'flex', justifyContent: 'flex-end'}} button onClick={openFriendRequest}><li style={{fontSize:'1vw'}}>{username}</li></ListItem>
    <Modal
      open={console.log({username})}
      onClose={closeFriendRequest}
      aria-labbeledby='modal-modal-title'
      aria-describedby='modal-modal-description'>
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'flex', justifyContent: 'center' }}>{username}</Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Button variant="contained" style={{ marginTop: '20px' }} onClick={addFriend}>Accept</Button>
          <Button variant="outlined" color="error" style={{ marginTop: '20px' }} onClick={denyFriendRequest}>Deny</Button>
        </Typography>
      </Box>
    </Modal>
    </div>
  )
}

export default FriendRequestModal