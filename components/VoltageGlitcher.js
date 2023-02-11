import {
  Button,
  FormControl,
  Input,
  InputLabel,
  TextField,
} from '@mui/material'
import React from 'react'

const VoltageGlitcher = () => {
  return (
    <>
      <TextField
        helperText='Enter the frequency'
        required
        type='text'
        id='standard-basic'
        label='Frequency'
        variant='standard'
      />
      <TextField
        helperText='Enter the channel'
        required
        type='text'
        id='standard-basic'
        label='Channel'
        variant='standard'
      />
      <TextField
        helperText='Enter the power on time'
        required
        type='text'
        id='standard-basic'
        label='Power On Time'
        variant='standard'
      />
      <TextField
        helperText='Enter the power off time'
        required
        type='text'
        id='standard-basic'
        label='Power Off Time'
        variant='standard'
      />
      <Button sx={{ marginTop: '1em' }}>Turn On Power</Button>
      <Button sx={{ marginTop: '1em' }}>Turn Off Power</Button>
    </>
  )
}

export default VoltageGlitcher
