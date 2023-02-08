import {
  Button,
  FormControl,
  Input,
  InputLabel,
  TextField,
} from '@mui/material'
import React from 'react'

const CheckUARTConsole = () => {
  return (
    <>
      <TextField
        helperText='Enter the baudrate'
        required
        type='text'
        id='standard-basic'
        label='Baudrate'
        variant='standard'
      />
      <Button sx={{ marginTop: '1em' }}>Submit</Button>
    </>
  )
}

export default CheckUARTConsole
