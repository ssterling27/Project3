import React, { useState, useEffect, Component } from 'react'
import './Home.css'
import sunVector from '../../images/sun-vector.svg'
import SynergizeLogo from '../../images/Synergize-Logo-10.png'
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

function Home() {
  return (
    <div id={'home'} style={{ height: '100vh', width: '92vw', position: 'relative', float: 'right'}}>
      <div style={{ marginTop: '25vh', display: 'flex', justifyContent: 'center', width: '92vw', position: 'relative', float: 'right', zIndex: '2'}}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <StyledToolbar>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1, alignSelf: 'center', textAlign: 'center' }}
            >
              Welcome to Synergize
            </Typography>
          </StyledToolbar>
        </AppBar>
      </Box>
      
      <br />

      <Paper
        elevation={8}
        style={{ marginTop: '10%', marginLeft: '10%', marginRight: '10%'}}
        variant="outlined"
        sx={{
          position: 'relative',
          backgroundColor: '#78797B',
          color: 'white',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: ''
        }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: '#78797B',
          }}/>
        <Grid container>
          <Grid item md={12} style={{ textAlign: 'center', marginLeft: '10%', marginRight: '10%'}}>
            <Box sx={{ position: 'relative', p: { xs: 3, md: 6 }, pr: { md: 0 }}} >
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                Synergize
              </Typography>
              <hr />
              <Typography variant="h5" color="inherit" paragraph>
                Schedule your own calendar events and create meetups with your friends!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Home