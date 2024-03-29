import { useState } from 'react'

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
import SynergizeLogo from '../../images/Synergize-Logo-10.png'

function LogInFooter(props) {
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

export default function LogInForm() {

 const [userState, setUserState] = useState({
  username: '',
  password: ''
 })

 const handleInputChange = ({ target: { name, value } }) => setUserState({ ...userState, [name]: value })

 const handleLoginUser = event => {
  event.preventDefault()
  UserAPI.login(userState)
   .then(({ data: token }) => {
    //  console.log(token)
     if (token) {
       localStorage.setItem('token', token)
       setUserState({ ...userState, username: '', password: '' })
       window.location = '/'  
     } else {
       alert('Invalid username and/or password')
     }
   })
   .catch(err => console.error(err))
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
         <Avatar sx={{ m: 1, bgcolor: '#F86F0F' }}>
      <LockOutlinedIcon />
     </Avatar>
     <Typography component="h1" variant="h5">
      Log In
     </Typography>
     <Box component="form" noValidate onSubmit={handleLoginUser} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
       <Grid item xs={12}>
        <TextField
         error={userState.username === ''}
         helperText={userState.username === '' ? 'Please enter a username' : ''}
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
       disabled={!userState.username || !userState.password}
      >
       Log In
      </Button>
      <Grid container justifyContent="center">
       <Grid item>
        <Link href="/register" variant="body2">
         Don't have an account? Register now
        </Link>
       </Grid>
      </Grid>
     </Box>
    </Box>
    <LogInFooter sx={{ mt: 5 }} />
   </Container>
  </ThemeProvider>
 );
}

// export default LoginForm