import React from 'react';
import {
  Typography,
  Box
} from 'material-ui';

const Header = () => {
  return (
    <Box>
      <Typography variant="h5" component="h1" >Hangman</Typography>
      <Typography>Find the hidden word</Typography>
      <Typography variant="body2" >(Enter some letter)</Typography>
    </Box>
  )
}

export default Header;