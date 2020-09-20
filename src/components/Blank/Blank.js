import React from 'react';
import _ from 'lodash';
import { Box } from 'material-ui';

const Blank = ({ rightLetters, selectedWord}) => {
  
  return (
    <Box display="flex">
      {selectedWord.split('').map((letter, index) => (
        <Box m={1} key={index}>
          {rightLetters.includes(letter) ? letter : '_'}
        </Box>
      ))}
    </Box>
  )
}

export default Blank;