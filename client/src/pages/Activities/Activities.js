
import { Button, Paper, Box, Typography, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@mui/material'
import './Activities.css'

import SynergizeLogo from '../../images/Synergize-Logo-10.png'
import BookBuster from '../../images/bookBuster.png'
import MePlant from '../../images/mePlant.png'
import Moodify from '../../images/moodify.png'
import BrewKeeper from '../../images/brewKeeper.png'
import EnRoute from '../../images/en-route.png'
import foodForYou from '../../images/foodForYou.png'
import Sessions from '../../images/sessions.png'
import Pub from '../../images/pub.png'



function Activities() {
  return (

   <div id={'activities'} style={{ height: '100vh' }}>
      <div style={{ zIndex: 2, position: 'relative', float: 'right', width: '100%' }}>
        <Paper elevation={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2%', marginTop: '1%', marginLeft: 'auto', marginRight: 'auto', color: 'black', backgroundColor: 'rgba(255, 255, 255, 0.7)', width: '50%', height: '5vh' }}>
        <h1>Activities</h1>
        </Paper>


        <Box component="div">
          <Grid container style={{justifyContent: 'center', height: '90vh', alignContent: 'space-evenly'}}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                <CardMedia
                  component="img"
                  height='60'
                  image={BookBuster}
                  alt="BookBuster"
                />
                <CardContent style={{height: '7vh'}}>
                  <Typography variant="h5" component="div" style={{marginTop: '-18px', fontSize: '1.2em'}}>
                    BookBuster
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Find a book and/or movie to with your friends!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' style={{ width: '50%', fontSize: '1vh' }} href='https://polyca123.github.io/Bookbuster/' target='_blank'>Visit Site</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                <CardMedia
                  component="img"
                  height='60'
                  image={MePlant}
                  alt="MePlant"
                />
                <CardContent style={{ height: '7vh' }}>
                  <Typography variant="h5" component="div" style={{ marginTop: '-18px', fontSize: '1.2em' }}>
                    MePlant
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Discuss plant care tips and tricks with others!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' style={{ width: '50%', fontSize: '1vh' }} href='https://meplant-app.herokuapp.com/' target='_blank'>Visit Site</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                <CardMedia
                  component="img"
                  height="60"
                  image={Moodify}
                  alt="Moodify"
                />
                <CardContent style={{ height: '7vh' }}>
                  <Typography variant="h5" component="div" style={{ marginTop: '-18px', fontSize: '1.2em' }}>
                    Moodify
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Find and create playlists based off of your mood!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' style={{ width: '50%', fontSize: '1vh' }} href='https://moodify-27.herokuapp.com/' target='_blank'>Visit Site</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                <CardMedia
                  component="img"
                  height="60"
                  image={BrewKeeper}
                  alt="BrewKeeper"
                />
                <CardContent style={{ height: '5vh' }}>
                  <Typography variant="h5" component="div" style={{ marginTop: '-18px', fontSize: '1.2em' }}>
                    BrewKeeper
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Find your favorite beers!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' style={{ width: '50%', fontSize: '1vh' }} href='https://floating-brook-56219.herokuapp.com/verifyage.html' target='_blank'>Visit Site</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                <CardMedia
                  component="img"
                  height="60"
                  image={EnRoute}
                  alt="En-Route"
                />
                <CardContent style={{ height: '5vh' }}>
                  <Typography variant="h5" component="div" style={{ marginTop: '-18px', fontSize: '1.2em' }}>
                    En-Route
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Plan your next road trip!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' style={{ width: '50%', fontSize: '1vh' }} href='https://ssterling27.github.io/EN-Route/index.html' target='_blank'>Visit Site</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                <CardMedia
                  component="img"
                  height="60"
                  image={foodForYou}
                  alt="Food For You"
                />
                <CardContent style={{ height: '5vh' }}>
                  <Typography variant="h5" component="div" style={{ marginTop: '-18px', fontSize: '1.2em' }}>
                    Food For You
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Find recipes!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' style={{ width: '50%', fontSize: '1vh' }} href='https://gresendi.github.io/FoodForYou/index.html' target='_blank'>Visit Site</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345, margin: 'auto'}}>
                <CardMedia
                  component="img"
                  height="60"
                  image={Sessions}
                  alt="Session"
                />
                <CardContent style={{ height: '5vh' }}>
                  <Typography variant="h5" component="div" style={{ marginTop: '-18px', fontSize: '1.2em' }}>
                    Session
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Find waves to surf nearby!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' style={{ width: '50%', fontSize: '1vh' }} href='https://sequint.github.io/session/sessions.html' target='_blank'>Visit Site</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={4} >
              <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                <CardMedia
                  component="img"
                  height="60"
                  image={Pub}
                  alt="Pub"
                />
                <CardContent style={{ height: '5vh' }}>
                  <Typography variant="h5" component="div" style={{ marginTop: '-18px', fontSize: '1.2em' }}>
                    PUB
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Create and track your projects!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' style={{width: '50%', fontSize: '1vh'}} href='https://pure-brook-86019.herokuapp.com/' target='_blank'>Visit Site</Button>
                </CardActions>
              </Card>
            </Grid>
           

          </Grid>

        </Box>
      </div>
    </div>

  )
}

export default Activities