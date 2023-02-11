import { Button, FormControl, Input, InputLabel, TextField } from '@mui/material'
import React from 'react'

const DetectBaudrate = () => {
  return (
    <>
      <TextField
        helperText='Enter the sample time'
        required
        type='text'
        id='standard-basic'
        label='Sample Time'
        variant='standard'
      />
      <TextField
        helperText='Enter the reboot delay'
        required
        type='text'
        id='standard-basic'
        label='Reboot Delay'
        variant='standard'
      />
      <Button sx={{marginTop:'1em'}}>Submit</Button>
    
  </>)
}

export default DetectBaudrate