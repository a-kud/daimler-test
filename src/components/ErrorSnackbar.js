import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red'
  }
})

const ErrorSnackbar = ({ message }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(Boolean(message))

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
          classes: {
            root: classes.root
          }
        }}
        message={<span id='message-id'>{message}</span>}
        action={[
          <IconButton
            key='close'
            aria-label='close'
            color='inherit'
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </>
  )
}

export default ErrorSnackbar
