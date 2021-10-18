import * as React from 'react'
import { Box, Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { MoveToInbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material'



function Navbar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: '8vw',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '8vw',
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar style={{display: 'flex', justifyContent: 'center'}}>
          <Typography style={{fontSize: '1.5vw'}}>
          Synergize
        </Typography>
        </Toolbar>
        <Divider />
        <List>
          <ListItem button key='Home'>
            {/* <ListItemText primary='Home' /> */}
            <li primary='Home' style={{fontSize: '1.2vw'}}>Home</li>
          </ListItem>
          <ListItem button key='Planner'>
            <li primary="Planner" style={{ fontSize: '1.2vw' }}>Planner</li>
          </ListItem>
          <ListItem button key='Friends'>
            <li primary="Friends" style={{ fontSize: '1.2vw' }}>Friends</li>
          </ListItem>
          <ListItem button key='Add Friend'>
            <li primary="Add Friend" style={{ fontSize: '1.2vw' }}>Add Friend</li>
          </ListItem>
          <ListItem button key='Activities'>
            <li primary="Activities" style={{ fontSize: '1.2vw' }}>Activities</li>
          </ListItem>
          {/* {['Home', 'Planner', 'Friends', 'Add Friend', 'Activities'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
        </List>
      </Drawer>
    </Box>
  )
}

export default Navbar