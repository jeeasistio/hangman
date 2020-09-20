import React from 'react';
const { useState } = React;
import { Box, TextField, Button } from 'material-ui';

const LetterInput = ({ handleLetter }) => {
  
  const [inputLetter, setInputLetter] = useState('');
  
  const handleEnter = (e) => {
    handleLetter(e, inputLetter);
    setInputLetter('');
  }
  
  return (
    <Box
      component="form" 
      onSubmit={handleEnter}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      my={2}
      mx={'auto'}
      width={300}
    >
      <TextField 
        inputProps={{
          maxlength: 1, 
          pattern: '[a-z]'
        }} 
        value={inputLetter}
        onChange={e => setInputLetter(e.target.value.toLowerCase())} 
        variant="outlined"
        size="small"
        style={{width: 200}}
      />
      <Button color="primary" variant="contained" type="submit">Enter</Button>
    </Box>
  )
}

export default LetterInput;