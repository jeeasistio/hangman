import React from 'react';
import { Typography, Box, Icon } from 'material-ui';

const Hangman = ({ wrongLetters }) => {
  return (
    <Box textAlign="center" my={1}>
      {Array(5).fill(0).map((letter, index, array) => (
        <Icon 
          fontSize="large"
          color={wrongLetters.length > index ? "secondary" : "action"}
          key={index}
        >close</Icon>
      ))}
    </Box>
  )
}

export default Hangman;