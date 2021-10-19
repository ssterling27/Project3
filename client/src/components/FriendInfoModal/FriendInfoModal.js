import { Button, Modal, Box, Typography, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import UserAPI from '../../utils/UserAPI'

function FriendInfoModal ({
  friendInfoOpen,
  setFriendInfoOpen,
  openFriendModal,
  closeFriendModal,
  modalStyle,
  username,
  user_id,
  friends,
  setFriends
}) {
  const scheduleMeetup = () => {}

  const removeFriend = () => {}

  return (
    <Modal
      open={friendInfoOpen}
      onClose={closeFriendModal}
      aria-labbeledby='modal-modal-title'
      aria-describedby='modal-modal-description'>
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'flex', justifyContent: 'center' }}>{username}</Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Button variant="contained" style={{ marginTop: '20px' }} onClick={scheduleMeetup}>Schedule Meetup</Button>
          <Button variant="outlined" color="error" style={{ marginTop: '20px' }} onClick={removeFriend}>Remove Friend</Button>
          </div>
        </Typography>
      </Box>
    </Modal>
  )
}

export default FriendInfoModal