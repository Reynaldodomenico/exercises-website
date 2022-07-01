import React from 'react';
import {Box, Typography, Button} from '@mui/material';

import HeroBannerImage from "../assets/images/banner1.jpg"

const HeroBanner = () => {
  return (
    <Box sx={{mt: { lg:'212px', xs:'70px'},ml:{ sm:'50px'}}}position="relative" p="20px">
        <Typography color = "#fff" fontWeight="600px" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight={700}
        sx={{fontSize:{lg:'44px', xs :'40px'}}} mb="23px" mt="30px" color = "#fff">
            Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography fontSize={22} lineHeight="35px" mb={3} color = "#fff">
            Check out the most effective exercises !
        </Typography>       
        <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor:'#808080', padding:'10px'}}>
            Explore exercises
        </Button>
        <Typography fontWeight={600} color="#fff" sx={{opacity:0.1, display:{lg:'block', xs:'none'}}} fontSize={200} mt="70px">
            Exercise
        </Typography>
        <img src ={HeroBannerImage} className="hero-banner-img"/>
    </Box>
  );
}

export default HeroBanner