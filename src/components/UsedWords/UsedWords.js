import React from 'react';
import { Typography, Box, Paper } from 'material-ui';

const UsedWords = ({ wrongLetters }) => {
  return (
    <Box
    textAlign="center"
      mx={'auto'}
      my={2} 
      p={2}
      component={Paper} 
      width={300}
    >
      <Typography variant="subtitle2">Wrong Letters</Typography>
      {wrongLetters.length > 0 && wrongLetters.map((letter, index) => (
        <Typography key={index} display="inline" component="pre">{letter}, </Typography>
      ))}
    </Box>
  )
}

export default UsedWords;