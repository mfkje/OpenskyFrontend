import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ActionAreaCard from '../review-card/Review';
import { Alert, AlertTitle } from '@mui/material';

import { useNavigate } from 'react-router-dom';

// import constants
import * as constants from '../../Constants';
import { DataContext } from '../../context/DataContext';

const reviews = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5}
]

const nfts = [
  {id: 1},
  {id: 2},
]

const Login = () => {

  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const { setIsAuth } = React.useContext(DataContext)

  let history = useNavigate();

  const alert = (<Alert severity="error" open>
  <AlertTitle>Error</AlertTitle>
  {errorMessage} — <strong>check!</strong>
  </Alert>)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("login button pressed");
    const data = new FormData(event.currentTarget);
    if (!data.get('email') || !data.get('password')) {
      return;
    }
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    fetch(`${constants.BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: data.get('email'), password: data.get('password')})
    }).then(res => {
          if (res.status === 401 || res.status === 403) {
            setError(true)
            setErrorMessage("User or Password wrong")
          }
          if (res.status === 200) {
            setIsAuth(true)
            setError(false)
            setErrorMessage("")
            history("/homepage")
            console.log("home page pass");
          }
          return res.json();
      })
      .then((credencial) => {
        console.log(credencial);
        document.cookie = `token=${credencial.token}; max-age=${60*10}; path=/; samesite=strict`;
        document.cookie = `usuarioId=${credencial.user._id}; max-age=${60*10}; path=/; samesite=strict`;
        document.cookie = `name=${credencial.user.name}; max-age=${60*10}; path=/; samesite=strict`;
        document.cookie = `surname=${credencial.user.surname}; max-age=${60*10}; path=/; samesite=strict`;
        document.cookie = `email=${credencial.user.email}; max-age=${60*10}; path=/; samesite=strict`;
        console.log(document.cookie);
      })
  }
  return(
    <>
      <main>
        <Grid container sx={{ height: '50vh' }} >
          <CssBaseline></CssBaseline>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            >
            <Typography component="h1" variant="h5" sx={{mt:4, ml: 4}}>
              Discover OpenSky NFT'S
            </Typography>
            <Typography component="h1" variant="h5" sx={{ml: 4}} >
              MarketPlace...
            </Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
              {nfts.map((element) => {
                return <ActionAreaCard key={element.id}/>
              })}
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
            <Box sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
              }}>              
              <Typography component="h1" variant="h5">
                Sign In
              </Typography>
              { error ? alert : <></>}
              <Box component="form" noValidate onSubmit={handleSubmit}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{mt:3, mb: 2, borderRadius: 5}}
                  >
                  Login
                </Button>                            
              </Box>
              <Typography sx={{mb:2}}>
                <Link href="/">
                  Forgot your Password?
                </Link>
              </Typography>
              <Typography>
                New User? <Link href="register">Register Today</Link>
              </Typography>     
            </Box>
          </Grid>
        </Grid>
        <Grid>
          <Typography component="h1" variant="h5" sx={{m:4}}>
            About OpenSky
          </Typography>
          <Typography variant="body2" sx={{m:4}}>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
            quasi quidem quibusdam.
          </Typography>
          <Typography component="h1" variant="h5" sx={{m:4}}>
            Reviews
          </Typography>
          <Typography variant="body2" sx={{m:4}}>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
            quasi quidem quibusdam.
          </Typography>
          <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
            {reviews.map((element) => {
              return <ActionAreaCard key={element.id}/>
            })}
          </Box>
          
        </Grid>
      </main>
    </>
  )
}

export default Login