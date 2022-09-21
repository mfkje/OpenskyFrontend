import { Box, Grid, Stack, Typography } from "@mui/material";
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import './footer-landing.css'

function Copyright(props) {
  return (
    <Typography variant="body2" align="center" {...props}>
      {'Copyright © '}
      {new Date().getFullYear() + ' '}
      <Link color="inherit" href="#">
        OpenSky
      </Link>{''}
      {'.'}
    </Typography>
  );
}

const FooterLandingPage = () => {
  return(
    <>
      <footer className="footer-landing-page">
        <Box sx={{ flexGrow: 1, py: 6 }} bgcolor="primary.main" color="white">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Typography align="center">
                  Location
                </Typography>
              </Stack>          
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Typography align="center">
                  Contact Us
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Typography align="center">
                  About Us
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Grid container direction="row" alignItems="center" justifyContent="center">
                <FacebookIcon sx={{ p:2 }}/>
                <WhatsAppIcon sx={{ p:2 }}/>
                <TwitterIcon sx={{ p:2 }}/> 
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={2}>
                <Typography align="center">
                  <Copyright sx={{ mt: 5 }} />
                </Typography>
              </Stack>
            </Grid>          
          </Grid>
        </Box>
      </footer>
    </>
  )
}

export default FooterLandingPage;