import React from 'react'
import { Container, Box, Typography, Button } from '@mui/material/';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function AboutUs() {
  return (
    <Container maxWidth='xl' >
      <Box display={{md: 'flex', xs: 'block'}} alignItems={'center'} height={'100vh'}>
        <Box flex={1} >
          <Typography variant='h2' gutterBottom>About us</Typography>
          <Typography variant='h5' gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          <Typography variant='body1' gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra facilisis purus, tincidunt pretium dolor placerat ut. Curabitur in justo mattis, volutpat erat in, lobortis purus. Morbi volutpat facilisis metus. In ipsum quam, tincidunt et suscipit id, feugiat egestas lorem</Typography>
          <Button variant='contained'>Read More</Button>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </Box>
        <Box flex={1}>
          <img src='/content-img.avif' />
        </Box>
      </Box>
    </Container>
  )
}
