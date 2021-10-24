import { Button, Modal, Box, Typography, TextField, ListItem, backdropClasses } from '@mui/material'
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
        <hr />
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Typography>
              Meetup Title
            </Typography>
            <Typography>
              Meetup Location
            </Typography>
          </div>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <TextField disabled type='text' style={{width: '45%', borderRadius: '2%' }} value={selectedMeetupRequest.title} />
            <TextField disabled type='text' style={{width: '45%', borderRadius: '2%'}} value={selectedMeetupRequest.location} />
          </div>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Typography>
              Meetup Description
            </Typography>
          </div>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <TextField disabled type='text'style={{ width: '95%' }} value={selectedMeetupRequest.description} />
          </div>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Typography>
              Meetup Starts At
            </Typography>
            <Typography>
              Meetup Ends At
            </Typography>
          </div>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <TextField disabled type='text' style={{ width: '45%' }} value={startFormat} />
            <TextField disabled type='text' style={{ width: '45%' }} value={endFormat} />
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