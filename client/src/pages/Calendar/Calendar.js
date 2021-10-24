import { Calendar as Planner, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import React, { useState, useEffect } from 'react'
import { Button, Modal, Box, Typography, TextField } from '@mui/material'
// import "react-datepicker/dist/react-datepicker.css";
import './Calendar.css'
import { LocalizationProvider, DateTimePicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import EventAPI from '../../utils/EventAPI'
import UserAPI from '../../utils/UserAPI'
import addHours from 'date-fns/addHours'
import {} from 'date-fns'

import sunVector from '../../images/sun-vector.svg'


import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



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



function Calendar({
  allEvents,
  setAllEvents,
  unavailableHours,
  newEvent,
  setNewEvent
}) {
  
  let viewDefault = 'month'

  if (window.innerWidth < 600) {
    viewDefault = 'day'
  }
  
  useEffect(() => {
    UserAPI.getUser()
      .then(({ data: { events: getEvents } }) => {
        getEvents.map((getEvent) => {
          getEvent.start = new Date(getEvent.start)
          getEvent.end = new Date(getEvent.end)
        }) 
        setAllEvents(getEvents)
      })
    console.log(newEvent)
  }, [])



  // function BasicModal() {
  //   const [open, setOpen] =useState(false);
  //   const handleOpen = function {
  //     setOpen(true);
  //   }
  //   const handleClose = function {
  //     setOpen(false);
  //   }
  // }
  const [selectEventOpen, setSelectEventOpen] = useState(false)
  const handleSelectEventOpen = () => setSelectEventOpen(true)
  const handleSelectEventClose = () => setSelectEventOpen(false)
  const [selectedEvent, setSelectedEvent] = useState({
    title: '',
    location: '',
    description: '',
    start: new Date(),
    end: new Date(),
    day: '',
    hours: [],
    id: '',
    users: []
  })
  const selectEvent = (event, e) => {
    setSelectedEvent({
      title: event.title,
      location: event.location,
      description: event.description,
      start: event.start,
      end: event.end,      
      id: event._id,
      users: event.users,
      day: event.day,
      hours: []
    })
    handleSelectEventOpen()
  }
  
const handleDeleteEvent = () => {
  EventAPI.delete(selectedEvent.id, selectedEvent.users)
  .then(() => {
    setAllEvents(allEvents.filter(ev => ev._id !== selectedEvent.id))
    setSelectedEvent({
      title: '',
      location: '',
      description: '',
      start: new Date(),
      end: new Date(),
      day: '',
      hours: [],
      id: '',
      users: []
    })
    handleSelectEventClose()
  })
  .catch(err => console.log(err))
}
  const [open, setOpen] = useState(false)
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   
  
  const handleUpdateEvent = () => {
    let startHour = parseInt(format(selectedEvent.start, 'HH'))
    let endHour = parseInt(format(selectedEvent.end, 'HH'))
    let duration = endHour - startHour
    let totalHours = []
    if (duration > 1) {
      for (let i = 0; i < duration; i++) {
        totalHours.push((startHour + i))
        selectedEvent.hours.push((startHour + i))
      }
    } else {
      selectedEvent.hours.push(startHour)
    }
    let updatedEvents = allEvents.filter(ev => ev._id !== selectedEvent.id)
    EventAPI.update(selectedEvent.id, selectedEvent)
      .then(() => {
        setAllEvents([...updatedEvents, {title: selectedEvent.title, location: selectedEvent.location, description: selectedEvent.description, start: selectedEvent.start, end: selectedEvent.end, day: selectedEvent.day, hours: selectedEvent.hours, _id: selectedEvent.id, users: selectedEvent.users}])
        setSelectedEvent({
          title: '',
          location: '',
          description: '',
          start: new Date(),
          end: new Date(),
          day: '',
          hours: [],
          id: '',
          users: []
        })
        handleSelectEventClose()
      })
  }
  function handleAddEvent() {
    // console.log(allEvents)
    // console.log(newEvent)
    let startHour = parseInt(format(newEvent.start, 'HH'))
    let endHour = parseInt(format(newEvent.end, 'HH'))
    let duration = endHour - startHour
    let totalHours = []
    if (duration > 1) {
      for (let i = 0; i < duration; i++) {
        totalHours.push((startHour + i))
        newEvent.hours.push((startHour + i))
      }
    } else {
      newEvent.hours.push(startHour)
    }
    // setAllEvents([...allEvents, newEvent])
    EventAPI.create({...newEvent})
    .then(({ data: e }) => {
      // console.log(e)
      e.start = new Date(e.start)
      e.end = new Date(e.end)
      setAllEvents([...allEvents, e])
    })
    setNewEvent({
      ...newEvent, title: '', location: '', description: '', start: new Date(), end: addHours(new Date(), 1), day: format(new Date(), 'MM-dd-yyyy'), hours: [] })
    handleClose()
  }
  
const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: 600,
  bgcolor: 'white',
  border: '2px solid grey',
  p: 4
}
  // useEffect(() => {
  //   setAllEvents([...allEvents])
  // }, [handleAddEvent, allEvents, setAllEvents])

  return (
    <div id='calendar'>
      <div style={{position: 'relative', float: 'right', zIndex: 2, width: '100%'}}>
      <Paper elevation={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom: '2%', marginTop: '1%', marginLeft: 'auto', marginRight: 'auto', color: 'black', backgroundColor: 'rgba(255, 255, 255, 0.7)', width: '50%', height: '5vh' }}>
        <h1>Calendar</h1>
      </Paper>
    <div style={{display: 'flex', justifyContent: 'center'}}>
          <Button variant="contained" className='schedulebutton' style={{ color: 'white', marginRight: '1%' }} onClick={() => document.getElementById("meetup").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })}>Schedule Meetup</Button>
          <Button variant="contained" className="addbutton" style={{ color: 'white', marginLeft: '1%' }} onClick={handleOpen}>Add Event</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labbeledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={boxStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{display: 'flex', justifyContent: 'center'}}>Add Event</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
              <TextField variant="outlined" type="text" label="Title" style={{width: '45%'}} value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})} />
              <TextField variant="outlined" type="text" label="Location" style={{width: '45%'}} value={newEvent.location} onChange={(e) => setNewEvent({...newEvent, location: e.target.value})} />
            </div>
           <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <TextField variant="outlined" type="text" label="Description" style={{width: '95%'}} multiline maxRows={4} value={newEvent.description} onChange={(e) => setNewEvent({...newEvent, description: e.target.value})} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px'}}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField variant="outlined" {...props} />}
                  label="Start Time"
                  value={newEvent.start}
                    onChange={(start) => { setNewEvent({ ...newEvent, start: start, end: addHours(start, 1), day: format(start, 'MM-dd-yyyy')})}} />
                  <DateTimePicker
                    renderInput={(props) => <TextField variant="outlined" {...props} />}
                    label="End Time"
                    value={newEvent.end}
                    onChange={(end) => { setNewEvent({ ...newEvent, end }) }} />
              </LocalizationProvider>
              {/* <DateTimePicker placeholderText="Start Date" selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})} />
              <DateTimePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} /> */}
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button variant="contained" style={{marginTop: '20px'}} onClick={handleAddEvent}>Add</Button>
            </div>
          </Typography>
        </Box>
        </Modal>
        <Modal
            open={selectEventOpen}
            onClose={handleSelectEventClose}
            aria-labbeledby='modal-modal-title'
            aria-describedby='modal-modal-description'>
            <Box sx={boxStyle}>
              <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'flex', justifyContent: 'space-around' }}>{selectedEvent.users.map(({username}) => (<p>{username}</p>))}</Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <TextField variant="outlined" type="text" label="Title" style={{ width: '45%' }} value={selectedEvent.title} onChange={(e) => setSelectedEvent({ ...selectedEvent, title: e.target.value })} />
                  <TextField variant="outlined" type="text" label="Location" style={{ width: '45%' }} value={selectedEvent.location} onChange={(e) => setSelectedEvent({ ...selectedEvent, location: e.target.value })} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                  <TextField variant="outlined" type="text" label="Description" style={{ width: '95%' }} multiline maxRows={4} value={selectedEvent.description} onChange={(e) => setSelectedEvent({ ...selectedEvent, description: e.target.value })} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      renderInput={(props) => <TextField variant="outlined" {...props} />}
                      label="Start Time"
                      value={selectedEvent.start}
                      onChange={(start) => { setSelectedEvent({ ...selectedEvent, start: start, end: addHours(start, 1), day: format(start, 'MM-dd-yyyy') }) }} />
                    <DateTimePicker
                      renderInput={(props) => <TextField variant="outlined" {...props} />}
                      label="End Time"
                      value={selectedEvent.end}
                      onChange={(end) => { setSelectedEvent({ ...selectedEvent, end }) }} />
                  </LocalizationProvider>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                  <Button variant="contained" onClick={handleUpdateEvent}>Save</Button>
                  <Button variant='contained' color="error" onClick={handleDeleteEvent}>Delete</Button>
                </div>
              </Typography>
            </Box>
          </Modal>
    </div>
    <Planner
      defaultView={viewDefault}
      localizer={localizer}
      events={allEvents}
      startAccessor='start'
      endAccessor='end'
      style={{ height: '82vh', marginTop: "3%", marginLeft: '2%', marginRight: '2%'}}
      onSelectEvent={selectEvent}/>
      </div>
      </div>
  )
}

export default Calendar