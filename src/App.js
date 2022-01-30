
import { AppBar, Container, CssBaseline, Toolbar, Typography, Button, Grid } from '@mui/material';
import PhotoCameraIcon  from '@mui/icons-material/PhotoCamera';




function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon />
          <Typography variant="h6">Junglers Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" >
            <Typography variant="h2" align="center" color="textPrimary" gutterBotom>Jungle Album</Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>This a list of my main Junglers ...</Typography>
            <div>
              <Grid container spacing={2} justifyContent={"center"}>
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
      </main>
    </>
  );
}

export default App;
