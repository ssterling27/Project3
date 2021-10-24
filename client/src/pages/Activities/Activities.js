
import { Button, Paper, Box, Typography, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@mui/material'
import './Activities.css'

import SynergizeLogo from '../../images/Synergize-Logo-10.png'

function Activities() {
  return (

   <div id={'activities'} style={{ height: '100vh' }}>
      <div style={{ zIndex: 2, position: 'relative', float: 'right', width: '100%' }}>
        <Paper elevation={8} style={{ display: 'flex', justifyContent: 'center', marginBottom: '2%', margin: '2vw', color: 'black', opacity: '50%' }}>
        <h1>Activities</h1>
      </Paper>
        <Box component="div">
          <Grid container justify="center">
            <Grid item xs={12} spacing={3} md={4}>
              <Card sx={{ maxWidth: 345, margin: '5rem auto', opacity: '95%' }}>
                <CardMedia
                  component="img"
                  height="170"
                  image=''
                  alt=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum amet facilis excepturi, neque nesciunt aliquam assumenda nemo ea soluta quae praesentium et quos optio laboriosam, magnam unde cum cupiditate molestias.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' href='#' target='_blank'>Visit Site</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} spacing={3} md={4}>
              <Card sx={{ maxWidth: 345, margin: '5rem auto' }}>
                <CardMedia
                  component="img"
                  height="170"
                  image={SynergizeLogo}
                  alt=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum amet facilis excepturi, neque nesciunt aliquam assumenda nemo ea soluta quae praesentium et quos optio laboriosam, magnam unde cum cupiditate molestias.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' href='#' target='_blank'>Visit Site</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} spacing={3} md={4}>
              <Card sx={{ maxWidth: 345, margin: '5rem auto' }}>
                <CardMedia
                  component="img"
                  height="170"
                  image=''
                  alt=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum amet facilis excepturi, neque nesciunt aliquam assumenda nemo ea soluta quae praesentium et quos optio laboriosam, magnam unde cum cupiditate molestias.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' href='#' target='_blank'>Visit Site</Button>
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