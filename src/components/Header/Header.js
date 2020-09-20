import React from 'react';
import {
  Typography,
  Box
} from 'material-ui';

const Header = () => {
  return (
    <Box textAlign="center" m={2}>
      <Typography variant="h5" component="h1" >Hangman</Typography>
      <Typography display="inline" component="pre">Find the hidden word </Typography>
      <Typography display="inline" variant="body2" color="textSecondary" >(Enter some letter)</Typography>
    </Box>
  )
}

export default Header;