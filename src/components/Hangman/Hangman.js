import React from 'react';
import { Typography, Box, Icon } from 'material-ui';

const Hangman = ({ wrongLetters }) => {
  return (
    <Box>
      {Array(5).fill(0).map((letter, index, array) => (
        <Icon 
          color={wrongLetters.length > index ? "secondary" : "action"}
          key={index}
        >close</Icon>
      ))}
    </Box>
  )
}

export default Hangman;