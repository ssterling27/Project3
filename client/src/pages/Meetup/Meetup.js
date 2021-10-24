import React, { useState, useEffect } from 'react'
import { dateFnsLocalizer } from 'react-big-calendar'
import FriendDropdown from '../../components/FriendDropdown/FriendDropdown.js'
import { Button, TextField, Paper, Modal, Box, Typography } from '@mui/material'
import {LocalizationProvider, DatePicker, DateTimePicker} from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import EventAPI from '../../utils/EventAPI/EventAPI.js'
import format from 'date-fns/format'
import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import addHours from 'date-fns/addHours'
import {} from 'date-fns'
import MeetupAPI from '../../utils/MeetupAPI'
import './Meetup.css'

const locales = {
  'en-US': require('date-fns/locale/en-US')
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

function Meetup({
  selectedFriendState,
  setSelectedFriendState,
  friends,
  allEvents,
  setAllEvents,
  selectedDay,
  setSelectedDay
}) {
  const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'white',
    border: '2px solid grey',
    p: 4
  }
  const [requestModalOpen, setRequestModalOpen] = useState(false)
  const openRequestSent = () => setRequestModalOpen(true)
  const closeRequestSent = () => setRequestModalOpen(false)
  const [meetupModalOpen, setMeetupModalOpen] = useState(false)
  const handleOpen = () => setMeetupModalOpen(true);
  const handleClose = () => setMeetupModalOpen(false);
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
  })
  const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      textAlign: 'center',
    },
  }));
  const classes = useStyles();
  let times = []
  const [unavailableTimes, setUnavailableTimes] = useState([])
  const [availableTimes, setAvailableTimes] = useState([])
  let timesArray = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
  const findEvents = () => {
    // console.log(selectedDay)
    let searchDay = format(selectedDay, 'MM-dd-yyyy')
    let searchFriend = selectedFriendState.id
    
    EventAPI.getEvents(searchFriend, searchDay)
      .then(({data}) => {
        data.map(({hours}) => {times.push(...hours)})
        setUnavailableTimes(times)
        
        let newList = timesArray.filter(function (availableTime) {
          return !times.includes(availableTime);
        })
        setAvailableTimes(newList)
        
      })
    }
  const [newMeetup, setNewMeetup] = useState({
    title: '',
    location: '',
    description: '',
    start: new Date(),
    end: addHours(new Date(), 1),
    day: '',
    hours: []
  })
    const openMeetupModal = (hour) => {
      let thisYear = format(selectedDay, 'yyyy')
      let thisMonth = (format(selectedDay, 'MM') - 1)
      let thisDay = format(selectedDay, 'dd')
      console.log(thisYear, thisMonth, thisDay, hour)
      setNewMeetup({
        title: ` with ${selectedFriendState.name}`,
        location: '',
        description: `Meetup with ${selectedFriendState.name}`,
        start: new Date(thisYear, thisMonth, thisDay, hour),
        end: addHours(new Date(thisYear, thisMonth, thisDay, hour), 1),
        // end: new Date((format(selectedDay, 'yyyy,MM,dd')), (hour + 1)),
        day: `${format(selectedDay, 'MM-dd-yyyy')}`,
        hours: []
      })
      handleOpen()
    }
    const sendMeetupRequest = () => {
      let startHour = parseInt(format(newMeetup.start, 'HH'))
      let endHour = parseInt(format(newMeetup.end, 'HH'))
      let duration = endHour - startHour
      let totalHours = []
      if (duration > 1) {
        for (let i = 0; i < duration; i++) {
          totalHours.push((startHour + i))
          newMeetup.hours.push((startHour + i))
        }
      } else {
        newMeetup.hours.push(startHour)
      }
      // console.log(newMeetup, selectedFriendState.id)
    MeetupAPI.sendMeetupRequest(newMeetup, selectedFriendState.id)
    .then(({data}) => {
      setNewMeetup({...newMeetup,
        title: '',
        location: '',
        description: '',
        start: new Date(),
        end: addHours(new Date(), 1),
        day: '',
        hours: [],
        sentBy: {}
      })
        handleClose()
      openRequestSent()
    })
    }
    
 useEffect(() => {
   console.log(availableTimes)
 }, [availableTimes])
  
//   useEffect(() => {
//     console.log(availableTimes)
//   }, [availableTimes])
// console.log(openTimes)
  
  return (
    <div id={'meetup'} style={{ height: '100vh'}}>
      <div style={{ position: 'relative', zIndex: 2, float: 'right', width: '100%' }}>
        <Paper elevation={8} style={{ display: 'flex', justifyContent: 'center', marginBottom: '2%', margin: '2vw', color: 'black', opacity: '50%' }}>
          <h1>Schedule a meetup</h1>
        </Paper>
        <Paper elevation={5} style={{ display: 'flex', justifyContent: 'center', marginBottom: '2%', margin: '2vw', color: 'black', opacity: '70%', marginRight: '20%', marginLeft: '20%' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5%' }}>
            <FriendDropdown
              selectedFriendState={selectedFriendState}
              setSelectedFriendState={setSelectedFriendState}
              friends={friends} />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
              renderInput={(props) => <TextField variant="outlined" {...props} />}
              label="Pick a Day"
              value={selectedDay}
              onChange={(selectedDay) => { setSelectedDay(selectedDay) }} />
              </LocalizationProvider>
          </div>       
        </Paper>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button className='findAvailTimesBtn' variant="contained" style={{ marginTop: '20px', backgroundColor: '#78797B', color: 'white'}} onClick={findEvents}>Find Available Times</Button>
      </div>
      <div style={{ marginTop: '2%', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '70vh', marginRight: '2%', marginLeft: '2%' }}>
        <Grid container spacing={2}>
        {availableTimes.map(hour => (
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Button className='availHourBtn' variant="contained" onClick={() => openMeetupModal(hour)} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', width: '100%', backgroundColor: 'white', color: 'black' }}>{(hour > 12) ? `${hour - 12} PM` : ``}{(hour < 12) ? `${hour} AM` : ''}{(hour === 12) ? `12 PM` : ''}</Button></Paper></Grid>
        ))}
        </Grid>
        <Modal
          open={meetupModalOpen}
          onClose={handleClose}
          aria-labbeledby='modal-modal-title'
          aria-describedby='modal-modal-description'>
          <Box sx={boxStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'flex', justifyContent: 'center' }}>New Meetup</Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <TextField variant="outlined" type="text" label="Title" style={{ width: '45%' }} value={newMeetup.title} onChange={(e) => setNewMeetup({ ...newMeetup, title: e.target.value })} />
                <TextField variant="outlined" type="text" label="Location" style={{ width: '45%' }} value={newMeetup.location} onChange={(e) => setNewMeetup({ ...newMeetup, location: e.target.value })} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <TextField variant="outlined" type="text" label="Description" style={{ width: '95%' }} multiline maxRows={4} value={newMeetup.description} onChange={(e) => setNewMeetup({ ...newMeetup, description: e.target.value })} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    renderInput={(props) => <TextField variant="outlined" {...props} />}
                    label="Start Time"
                    value={newMeetup.start}
                    onChange={(start) => { setNewMeetup({ ...newMeetup, start: start, end: addHours(start, 1), day: format(start, 'MM-dd-yyyy') }) }} />
                  <DateTimePicker
                    renderInput={(props) => <TextField variant="outlined" {...props} />}
                    label="End Time"
                    value={newMeetup.end}
                    onChange={(end) => { setNewMeetup({ ...newMeetup, end }) }} />
                </LocalizationProvider>
                {/* <DateTimePicker placeholderText="Start Date" selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})} />
              <DateTimePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} /> */}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" style={{ marginTop: '20px' }} onClick={sendMeetupRequest}>Send Meetup Request</Button>
              </div>
            </Typography>
          </Box>
        </Modal>
        <Modal
          open={requestModalOpen}
          onClose={closeRequestSent}
          aria-labbeledby='modal-modal-title'
          aria-describedby='modal-modal-description'>
          <Box sx={boxStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'flex', justifyContent: 'center' }}>Your Meetup Request has been sent! It'll show up in your calendar when your friend accepts.</Typography>
            <Typography>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="outlined" color="success" style={{ marginTop: '20px' }} onClick={closeRequestSent}>Got it</Button>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
      </div>
    </div>
  )
}

export default Meetup