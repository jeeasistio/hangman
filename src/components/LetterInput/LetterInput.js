import React from 'react';
import { Box, Button, ButtonGroup } from 'material-ui';
import uuid from 'uuid-v4';

const LetterInput = ({ handleLetter }) => {

  const firRow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const secRow = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const thiRow = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
  const rows = [firRow, secRow, thiRow];

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={2}>
      {rows.map(row => (
        <ButtonGroup>
          {row.map(letter => (
            <Button 
              style={{
                minWidth: 30,
                maxWidth: 30,
                minHeight: 35,
                maxHeight: 35,
                padding: 0
              }}
              onClick={() => handleLetter({key: letter})} 
              key={uuid()}
            >
              {letter}
            </Button>
          ))}
        </ButtonGroup>
      ))}
    </Box>
  )
}

export default LetterInput;