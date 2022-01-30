
import { AppBar, Container, CssBaseline, Toolbar, Typography, Button, Grid, CardContent, CardActions } from '@mui/material';
import PhotoCameraIcon  from '@mui/icons-material/PhotoCamera';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import useStyles from './styles';


const cards = [1,2,3,4,5,6,7,8,9]


function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon sx={useStyles.icon}/>
          <Typography variant="h6">Junglers Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" sx={useStyles.container} >
            <Typography variant="h2" align="center" color="textPrimary" gutterBotom>Jungle Album</Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>This a list of my main Junglers ...</Typography>
            <div sx={useStyles.buttons}>
              <Grid container spacing={2} justifyContent={"center"} >
                <Grid item>
                  <Button variant="contained" color="primary">see my photos</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">secondary action</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container sx={useStyles.cardGrid} maxWidth="md">
          <Grid container spacing={4} >
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
              <Card sx={useStyles.Card}> 
                 <CardMedia
                  sx={useStyles.cardMedia}
                  image="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_0.jpg" 
                  />
                  <CardContent sx={useStyles.cardContent}>
                    <Typography gutterBottom variant='h5'>
                      Elise
                    </Typography>
                    <Typography>
                      Description
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Edit</Button>
                  </CardActions>
              </Card>
            </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer sx={useStyles.footer}>
              <Typography variant='h6' align='center' gutterBottom>
                Footer
              </Typography>
              <Typography variant='subtitle1' align='center' color='textSecondary'>
                Thank you for visit
              </Typography>
      </footer>
    </>
  );
}

export default App;
