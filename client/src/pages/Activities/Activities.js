
import { Button, Paper, Box, Typography, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@mui/material'
import './Activities.css'
function Activities() {
  return (
    <div id={'activities'} style={{ height: '100vh' }}>
      <div style={{ zIndex: 2, position: 'relative', float: 'right', width: '100%' }}>
      <Paper elevation={8} style={{ display: 'flex', justifyContent: 'center', marginBottom: '2%', margin: '2vw' }}>
        <h1>Activities</h1>
      </Paper>
      <Grid item xs={12} sm={8} md={6}>
        <Card sx={{ maxWidth: 345, marginLeft: '5vw' }}>
          <CardMedia
            component="img"
            height=""
            image=""
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
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
  </div>
    </div>

  )
}

export default Activities