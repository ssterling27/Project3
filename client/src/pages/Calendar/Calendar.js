import { Calendar as Planner, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import React, { useState } from 'react'
import { Button, Modal, Box, Typography, FormGroup, TextField } from '@mui/material'
// import "react-datepicker/dist/react-datepicker.css";
import './Calendar.css'
import { LocalizationProvider, DateTimePicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns';

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

const events = [
  {
    title: 'Class',
    start: new Date(2021, 9, 15, 10, 15),
    end: new Date(2021, 9, 15, 11, 30)
  },
  {
    title: 'Vacation',
    start: new Date(2021, 9, 16),
    end: new Date(2021, 9, 17),
    allday: true
  },
  {
    title: 'Conference',
    start: new Date(2021, 9, 18),
    end: new Date(2021, 9, 18)
  }
]

function Calendar() {
  const eventTemplate = {
    title: '',
    location: '',
    description: '',
    start: new Date(),
    end: new Date()
  }
  const [newEvent, setNewEvent] = useState({
    title: '',
    location: '',
    description: '',
    start: new Date(),
    end: new Date()
  })
  const [allEvents, setAllEvents] = useState(events)

  // function BasicModal() {
  //   const [open, setOpen] =useState(false);
  //   const handleOpen = function {
  //     setOpen(true);
  //   }
  //   const handleClose = function {
  //     setOpen(false);
  //   }
  // }

  const [open, setOpen] = useState(false)
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);


  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent])
    handleClose()
    setNewEvent({...newEvent, title: '', location: '', description: '', start: new Date(), end: new Date()})
  }

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'white',
  border: '2px solid grey',
  p: 4
}

  return (
    
    <>
    <h2 style={{ display: 'flex', justifyContent: 'center' }}>Calendar</h2>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Button style={{marginRight: '20px'}} variant="contained" color="success">Schedule Meetup</Button>
      <Button variant="contained" onClick={handleOpen}>Add Event</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labbeledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
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
                  onChange={(start) => {setNewEvent({...newEvent, start})}} />
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
    </div>
    <Planner
      localizer={localizer}
      events={allEvents}
      startAccessor='start'
      endAccessor='end'
      style={{ height: 1000, margin: "50px"}} />
    </>
  )
}

export default Calendar