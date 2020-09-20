import React from 'react';
import { Typography, Box } from 'material-ui';

const UsedWords = ({ wrongLetters }) => {
  return (
    <Box>
      <Typography>Wrong Letters</Typography>
      {wrongLetters.length > 0 && wrongLetters.map((letter, index) => (
        <Typography key={index} display="inline" component="pre">{letter}, </Typography>
      ))}
    </Box>
  )
}

export default UsedWords;