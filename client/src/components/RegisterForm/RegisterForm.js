import { useState, useEffect } from 'react'

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import UserAPI from '../../utils/UserAPI'

import axios from 'axios'
import SynergizeLogo from '../../images/Synergize-Logo-10.png'

function RegisterFooter(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      <Link color="inherit" href="#">
        Synergize
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function RegisterForm() {

  const [usernamesState, setUsernamesState] = useState([])

  // grab all the usernames to check and prevent duplicates during registration (add to API but testing here first)
  useEffect(() => {
    axios.get('/api/usernames')
      .then(({ data: usernames }) => {
        setUsernamesState({ ...usernamesState, usernames })
      })
      .catch(err => console.log(err))
  }, [])

  console.log(usernamesState.usernames)

  const [userState, setUserState] = useState({
    name: '',
    username: '',
    password: ''
  })

  const handleInputChange = ({ target: { name, value } }) => setUserState({ ...userState, [name]: value })

  const handleRegisterUser = event => {
    event.preventDefault()
    // check if the user's proposed username already exists in the current usernames from db (lowercase all to check for dups)
    if (usernamesState.usernames.indexOf(userState.username.toLowerCase()) !== -1) {
      console.log('username already exists')
    } else {
      UserAPI.register(userState)
        .then(() => {
          alert('User Registered! Sign In Now')
          setUserState({ ...userState, name: '', username: '', password: '' })
          window.location = '/signIn'
        })
        .catch(err => console.error(err))
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={SynergizeLogo} alt={'Synergize'} style={{ width: '20vw' }} />
          <br />
          <Avatar sx={{ m: 1, bgcolor: '#FFE561' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" noValidate onSubmit={handleRegisterUser} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  error={userState.name === ''}
                  helperText={userState.name === '' ? 'Please enter a name' : ''}
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={userState.name}
                  onChange={handleInputChange}
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={userState.username === '' || usernamesState.usernames.indexOf(userState.username.toLowerCase()) !== -1 }
                  helperText={userState.username === '' ? 'Please enter a username' : '' || usernamesState.usernames.indexOf(userState.username.toLowerCase()) !== -1 ? 'Username already exists - Please choose another' : ''}
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  value={userState.username}
                  onChange={handleInputChange}
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={userState.password === ''}
                  helperText={userState.password === '' ? 'Please enter a password' : ''}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={userState.password}
                  onChange={handleInputChange}
                  variant="filled"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 3 }}
              disabled={!userState.name || !userState.username || !userState.password || usernamesState.usernames.indexOf(userState.username.toLowerCase()) !== -1}
            >
              Register
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/signIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <RegisterFooter sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

// export default RegisterForm
