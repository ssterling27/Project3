import { Button, Modal, Box, Typography, TextField, ListItem } from '@mui/material'
import React, { useState, useEffect } from 'react'
import UserAPI from '../../utils/UserAPI'

function FriendRequestModal ({
  friendOpen,
  setFriendOpen,
  openFriendRequest,
  closeFriendRequest,
  modalStyle,
  selectedRequestState,
  setSelectedRequestState,
  friendRequestState,
  setFriendRequestState,
  friends,
  setFriends
}) {
  const addFriend = () => {
    UserAPI.addFriend(selectedRequestState.id)
      .then(({ data }) => {
        setFriends([...friends, data])
        // console.log(data)
      })
    closeFriendRequest()
    setFriendRequestState(friendRequestState.filter(friendrequest => friendrequest.id !== selectedRequestState.id))
    setSelectedRequestState({ name: '', username: '', id: '' })
  }
  const denyFriendRequest = () => {
    UserAPI.denyFriendRequest(selectedRequestState.id)
    closeFriendRequest()
    setFriendRequestState(friendRequestState.filter(friendrequest => friendrequest.id !== selectedRequestState.id))
    setSelectedRequestState({name: '', username: '', id: ''})
  }
  return (
    <Modal
      open={friendOpen}
      onClose={closeFriendRequest}
      aria-labbeledby='modal-modal-title'
      aria-describedby='modal-modal-description'>
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h4" component="h2" style={{ display: 'flex', justifyContent: 'center' }}>Friend Request From:</Typography>
        <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px'}}>{selectedRequestState.username}</Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <Button variant="contained" style={{ marginTop: '20px' }} onClick={addFriend}>Accept</Button>
          <Button variant="outlined" color="error" style={{ marginTop: '20px' }} onClick={denyFriendRequest}>Deny</Button>
          </div>
        </Typography>
      </Box>
    </Modal>
  )
}

export default FriendRequestModal