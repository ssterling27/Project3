
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
        <Paper elevation={8} style={{ display: 'flex', justifyContent: 'center', marginBottom: '2%', margin: '2vw', color: 'black', opacity: '50%' }}>
        <h1>Activities</h1>
        </Paper>


        <Box component="div">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345, margin: '5rem auto', opacity: '95%' }}>
                <CardMedia
                  component="img"
                  height="170"
                  image={BookBuster}
                  alt="BookBuster"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    BookBuster
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Find a book and/or movie to with your friends!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' href='https://polyca123.github.io/Bookbuster/' target='_blank'>Visit Site</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345, margin: '5rem auto' }}>
                <CardMedia
                  component="img"
                  height="170"
                  image={MePlant}
                  alt="MePlant"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    MePlant
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Discuss plant care tips and tricks with others!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' href='https://meplant-app.herokuapp.com/' target='_blank'>Visit Site</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345, margin: '5rem auto' }}>
                <CardMedia
                  component="img"
                  height="170"
                  image={Moodify}
                  alt="Moodify"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Moodify
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Find and create playlists based off of your mood!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' href='https://moodify-27.herokuapp.com/' target='_blank'>Visit Site</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345, margin: '5rem auto', opacity: '95%' }}>
                <CardMedia
                  component="img"
                  height="170"
                  image={BrewKeeper}
                  alt="BrewKeeper"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    BrewKeeper
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Find and record your favorite beers!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' href='https://floating-brook-56219.herokuapp.com/verifyage.html' target='_blank'>Visit Site</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345, margin: '5rem auto' }}>
                <CardMedia
                  component="img"
                  height="170"
                  image={EnRoute}
                  alt="En-Route"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    En-Route
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Plan your next road trip and activities!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' href='https://ssterling27.github.io/EN-Route/index.html' target='_blank'>Visit Site</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345, margin: '5rem auto' }}>
                <CardMedia
                  component="img"
                  height="170"
                  image={foodForYou}
                  alt="Food For You"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Food For You
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Find recipes based off your ingredients!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' href='https://gresendi.github.io/FoodForYou/index.html' target='_blank'>Visit Site</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345, margin: '5rem auto', opacity: '95%' }}>
                <CardMedia
                  component="img"
                  height="170"
                  image={Sessions}
                  alt="Session"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Sessions
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Find waves to surf nearby!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' href='https://sequint.github.io/session/sessions.html' target='_blank'>Visit Site</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345, margin: '5rem auto' }}>
                <CardMedia
                  component="img"
                  height="170"
                  image={Pub}
                  alt="En-Route"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    PUB
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Create, track and share your projects!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' href='https://pure-brook-86019.herokuapp.com/' target='_blank'>Visit Site</Button>
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