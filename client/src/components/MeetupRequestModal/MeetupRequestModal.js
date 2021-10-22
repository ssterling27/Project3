import { Button, Modal, Box, Typography, TextField, ListItem } from '@mui/material'
import React, { useState, useEffect } from 'react'
import UserAPI from '../../utils/UserAPI'
import EventAPI from '../../utils/EventAPI'
import MeetupAPI from '../../utils/MeetupAPI'
import format from 'date-fns/format'

function MeetupRequestModal({
  meetupRequestOpen,
  setMeetupRequestOpen,
  openMeetupRequest,
  closeMeetupRequest,
  modalStyle,
  selectedMeetupRequest,
  setSelectedMeetupRequest,
  allMeetupRequests,
  setAllMeetupRequests,
  newEvent,
  setNewEvent,
  allEvents,
  setAllEvents
}) {
  // const addFriend = () => {
  //   UserAPI.addFriend(selectedRequestState.id)
  //     .then(({ data }) => {
  //       setFriends([...friends, data])
  //       // console.log(data)
  //     })
  //   closeFriendRequest()
  //   setFriendRequestState(friendRequestState.filter(friendrequest => friendrequest.id !== selectedRequestState.id))
  //   setSelectedRequestState({ name: '', username: '', id: '' })
  // }
  // const denyFriendRequest = () => {
  //   UserAPI.denyFriendRequest(selectedRequestState.id)
  //   closeFriendRequest()
  //   setFriendRequestState(friendRequestState.filter(friendrequest => friendrequest.id !== selectedRequestState.id))
  //   setSelectedRequestState({ name: '', username: '', id: '' })
  // }
  
    let startHour = parseInt(format(selectedMeetupRequest.start, 'HH'))
    let startM = ''
    if (startHour > 12) {
      startHour = startHour - 12
      startM = 'PM'
    } else if (startHour < 12) {
      startM = 'AM'
    } else {
      startM = 'PM'
    }
  let endHour = parseInt(format(selectedMeetupRequest.end, 'HH'))
  let endM = ''
  if (endHour > 12) {
    endHour = endHour - 12
    endM = 'PM'
  } else if (endHour < 12) {
    endM = 'AM'
  } else {
    endM = 'PM'
  }
  let endFormat = `${format(selectedMeetupRequest.end, 'MM/dd/yyyy')} ${endHour}:${format(selectedMeetupRequest.end, 'mm')} ${endM}`
    let startFormat = `${format((selectedMeetupRequest.start), 'MM/dd/yyyy')} ${startHour}:${format(selectedMeetupRequest.start, 'mm')} ${startM}`
  const acceptMeetup = () => {
    console.log(selectedMeetupRequest)
    let newMeetup = {
      title: selectedMeetupRequest.title,
      location: selectedMeetupRequest.location,
      description: selectedMeetupRequest.description,
      start: selectedMeetupRequest.start,
      end: selectedMeetupRequest.end,
      day: selectedMeetupRequest.day,
      hours: selectedMeetupRequest.hours
    }
    setAllEvents([...allEvents, newMeetup])
    MeetupAPI.acceptMeetupRequest(selectedMeetupRequest.sentBy.id, selectedMeetupRequest.meetupid, newMeetup)
    .then(({data}) => {
      // setFriendRequestState(friendRequestState.filter(friendrequest => friendrequest.id !== selectedRequestState.id))
      setAllMeetupRequests(allMeetupRequests.filter(meetupRequest => meetupRequest.meetupid !== selectedMeetupRequest.meetupid))
      closeMeetupRequest()
    })
  }
  const denyMeetup = () => {
    MeetupAPI.denyMeetupRequest(selectedMeetupRequest.meetupid)
    setAllMeetupRequests(allMeetupRequests.filter(meetupRequest => meetupRequest.meetupid !== selectedMeetupRequest.meetupid))
    closeMeetupRequest()
  }
  return (
    <Modal
      open={meetupRequestOpen}
      onClose={closeMeetupRequest}
      aria-labbeledby='modal-modal-title'
      aria-describedby='modal-modal-description'>
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h4" component="h2" style={{ display: 'flex', justifyContent: 'center' }}>Meetup Request From:</Typography>
        <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>{selectedMeetupRequest.sentBy.username}</Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <p>{selectedMeetupRequest.title}</p>
            <p>{selectedMeetupRequest.location}</p>
          </div>
          </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <p>{selectedMeetupRequest.description}</p>
          </div>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <p>Starts at: {startFormat}</p>
            <p>Ends at: {endFormat}</p>
          </div>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button variant="contained" style={{ marginTop: '20px' }} onClick={acceptMeetup}>Accept</Button>
            <Button variant="outlined" color="error" style={{ marginTop: '20px' }} onClick={denyMeetup}>Deny</Button>
          </div>
        </Typography>
      </Box>
    </Modal>
  )
}

export default MeetupRequestModal