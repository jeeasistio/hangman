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
    <Box component="form" onSubmit={handleEnter}>
      <TextField 
        inputProps={{
          maxlength: 1, 
          pattern: '[a-z]'
        }} 
        helperText="Please enter a letter"
        value={inputLetter}
        onChange={e => setInputLetter(e.target.value.toLowerCase())} 
      />
      <Button type="submit">Enter</Button>
    </Box>
  )
}

export default LetterInput;