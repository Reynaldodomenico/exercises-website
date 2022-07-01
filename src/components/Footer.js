import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/pngwing.com.png';

const Footer = () => (
  <Box mt="80px" body>
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '100px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px" color="#fff" font-weight="300">Reynaldo Domenico. 2022 all right reserved.</Typography>
  </Box>
);

export default Footer;
