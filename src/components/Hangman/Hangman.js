import React from 'react';
import { Typography, Box, Icon } from 'material-ui';
import uuid from 'uuid-v4';

const Hangman = ({ wrongLetters }) => {
  return (
    <Box textAlign="center" my={1}>
      {Array(5).fill(0).map((letter, index) => (
        <Icon 
          fontSize="large"
          color={wrongLetters.length > index ? "secondary" : "action"}
          key={uuid()}
        >close</Icon>
      ))}
    </Box>
  )
}

export default Hangman;