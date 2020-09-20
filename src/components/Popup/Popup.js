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
    <Dialog open={!playable} onClose={closePopUp} disableBackdropClick>
      <DialogTitle>{message}</DialogTitle>
      <DialogContent>
        <DialogContentText>Correct answer is&nbsp;
          <Typography style={{fontWeight: 500}} display="inline">{correctWord}</Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={playAgain}>Play Again</Button>
      </DialogActions>
    </Dialog>
  )
}

export default Popup;