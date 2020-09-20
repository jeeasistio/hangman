import React from 'react';
import {
  Snackbar
} from 'material-ui';

const Notification = ({ clickedAgain, closeNotif }) => {
  return (
    <Snackbar
      open={clickedAgain}
      autoHideDuration={2000}
      onClose={closeNotif}
      message="Letter clicked already"
    />
  )
}

export default Notification;