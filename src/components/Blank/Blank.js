import React from 'react';
import _ from 'lodash';
import { Box, Typography } from 'material-ui';
import uuid from 'uuid-v4'

const Blank = ({ rightLetters, selectedWord}) => {
  
  return (
    <Box display="flex" justifyContent="center" my={1}>
      {selectedWord.split('').map(letter => (
        <Box m={1} key={uuid()}>
          <Typography variant="h4">{rightLetters.includes(letter) ? letter : '_'}</Typography>
        </Box>
      ))}
    </Box>
  )
}

export default Blank;