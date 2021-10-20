import { Button, Modal, Box, Typography, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import UserAPI from '../../utils/UserAPI'

function FriendInfoModal ({
  friendInfoOpen,
  setFriendInfoOpen,
  openFriendModal,
  closeFriendModal,
  modalStyle,
  selectedFriendState,
  setSelectedFriendState,
  friends,
  setFriends
}) {
  const scheduleMeetup = () => {
    closeFriendModal()
    document.getElementById("meetup").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
  }

  const removeFriend = () => {
  UserAPI.removeFriend(selectedFriendState.id)
    setFriends(friends.filter(friend => friend._id !== selectedFriendState.id))
    setSelectedFriendState({name: '', username: '', id: ''})
  closeFriendModal()
}
  return (
    <Modal
      open={friendInfoOpen}
      onClose={closeFriendModal}
      aria-labbeledby='modal-modal-title'
      aria-describedby='modal-modal-description'>
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h5" component="h2" style={{ display: 'flex', justifyContent: 'center' }}>{selectedFriendState.name}</Typography>
        <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>Better known as</Typography>
        <Typography id="modal-modal-title" variant="h4" component="h2" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>{selectedFriendState.username}</Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <Button variant="contained" style={{ marginTop: '20px' }} onClick={scheduleMeetup}>Schedule Meetup</Button>
          <Button variant="outlined" color="error" style={{ marginTop: '20px' }} onClick={removeFriend}>Remove Friend</Button>
          </div>
        </Typography>
      </Box>
    </Modal>
  )
}

export default FriendInfoModal