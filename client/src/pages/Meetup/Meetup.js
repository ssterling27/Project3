import React, { useState, useEffect } from 'react'
import FriendDropdown from '../../components/FriendDropdown/FriendDropdown.js'
import { Button, TextField } from '@mui/material'
import {LocalizationProvider, DatePicker} from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import EventAPI from '../../utils/EventAPI/EventAPI.js'
import format from 'date-fns/format'



function Meetup({
  selectedFriendState,
  setSelectedFriendState,
  friends,
  allEvents,
  setAllEvents,
  selectedDay,
  setSelectedDay
}) {
  const times = []
  const [unavailableTimes, setUnavailableTimes] = useState([])
  const findEvents = () => {
    // console.log(selectedDay)
    let searchDay = format(selectedDay, 'MM-dd-yyyy')
    let searchFriend = selectedFriendState.id
    
    EventAPI.getEvents(searchFriend, searchDay)
      .then(({data}) => {
        data.map(({hours}) => {times.push(...hours)})
      })
      setUnavailableTimes(times)
  }
  console.log(unavailableTimes)
  return (
    <div id={'meetup'} style={{ height: '100vh', width: '91vw', position: 'relative', float: 'right' }}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <h2>Schedule a Meetup</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button variant="contained" color="success" style={{marginTop: '20px'}} onClick={findEvents}>Find Available Times</Button>
      </div>
    </div>
  )
}

export default Meetup