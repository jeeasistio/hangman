import React from 'react';
const { useState, useEffect } = React;
import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from 'material-ui';

const Popup = ({ selectedWord, playable, playAgain, closePopUp, message }) => {
  
  const [correctWord, setCorrectWord] = useState('');
  
  useEffect(() => {
    setTimeout(() => {
      setCorrectWord(selectedWord)
    }, 500)
  }, [selectedWord])
  
  return (
    <Dialog open={!playable} onClose={closePopUp}>
      <DialogTitle>{message}</DialogTitle>
      <DialogContent>
        <DialogContentText>Correct answer is {correctWord}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={playAgain}>Play Again</Button>
      </DialogActions>
    </Dialog>
  )
}

export default Popup;