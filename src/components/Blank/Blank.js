import React from 'react';
import _ from 'lodash';
import { Box, Typography } from 'material-ui';

const Blank = ({ rightLetters, selectedWord}) => {
  
  return (
    <Box display="flex" justifyContent="center" my={1}>
      {selectedWord.split('').map((letter, index) => (
        <Box m={1} key={index}>
          <Typography variant="h4">{rightLetters.includes(letter) ? letter : '_'}</Typography>
        </Box>
      ))}
    </Box>
  )
}

export default Blank;