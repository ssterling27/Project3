
import { Button, Paper, Box, Typography, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@mui/material'
import './Activities.css'
function Activities() {
  return (
    <div id={'activities'} style={{ height: '100vh', width: '92vw', position: 'relative', float: 'right' }}>
    <div style={{ position: 'relative', zIndex: 2 }}>
        <Paper elevation={8} style={{ display: 'flex', justifyContent: 'center', marginBottom: '2%', margin: '2vw', color: 'black', opacity: '50%' }}>
        <h1>Activities</h1>
      </Paper>
        <Box component="div">
          <Grid container justify="center">
            {/* Project 1 */}
            <Grid item xs={12} sm={8} md={6}>
              <Card sx={{ maxWidth: 345 }}>
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
            {/* Project 2 */}
            <Grid item xs={12} sm={8} md={6}>
              <Card sx={{ maxWidth: 345 }}>
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
          </Grid>
        </Box>
  </div>
    </div>

  )
}

export default Activities