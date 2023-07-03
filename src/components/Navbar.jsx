import React from 'react';
import { Box, Typography,useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const theme = useTheme()
  return (
    <>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        // bgcolor="purple"
        color="white"
        p="1rem 6%"
        textAlign="center"
        sx={{boxShadow:3,mb:2}}
        
      >
        <Typography variant="h1" color="primary" fontWeight="bold">
          AI GPT3 Clone
        </Typography>
        <NavLink to="/register" style={{ padding: '1rem' }}>
          SignUp
        </NavLink>
        <NavLink to="/login" style={{ padding: '1rem' }}>
          SignIn
        </NavLink>
      </Box>
    </>
  );
};

export default Navbar;
