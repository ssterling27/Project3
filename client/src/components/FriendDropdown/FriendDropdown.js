import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState, useEffetct} from 'react'

function FriendDropdown ({
  selectedFriendState,
  setSelectedFriendState,
  friends
}) {
  const handleChange = (event) => {
    // setSelectedFriendState({
    //   username: event.target.value,
    // });
  };
  const selectThisFriend = (_id, name, username) => {
    setSelectedFriendState({username: username, id: _id, name: name})
  }
  React.useEffect(() => {
    console.log(selectedFriendState)
  }, [selectThisFriend])

  return (
    <Box sx={{ width: '30vw', marginRight: '50px' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select a Friend</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedFriendState.username}
          label="Selected Friend"
          onChange={handleChange}
        >
          {friends.map(({username, _id, name}) => (
            <MenuItem value={username} onClick={() => selectThisFriend(_id, name, username)}>{username}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  // return (
  //   <Box sx={{ minWidth: 120 }}>
  //     <FormControl fullWidth>
  //       <InputLabel id="demo-simple-select-label">Age</InputLabel>
  //       <Select
  //         labelId="demo-simple-select-label"
  //         id="demo-simple-select"
  //         value={age}
  //         label="Age"
  //         onChange={handleChange}
  //       >
  //         {friends.map(({ username, id, name }) => (
  //           <MenuItem value={username} id={name}>{username}</MenuItem>
  //         ))}
  //         {/* <MenuItem value={10}>Ten</MenuItem>
  //         <MenuItem value={20}>Twenty</MenuItem>
  //         <MenuItem value={30}>Thirty</MenuItem> */}
  //       </Select>
  //     </FormControl>
  //   </Box>
  // );
}


export default FriendDropdown