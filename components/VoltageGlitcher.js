import {
  Button,
  FormControl,
  Input,
  InputLabel,
  TextField,
} from '@mui/material'
import React, { useRef } from 'react'

const VoltageGlitcher = () => {
  const frequencyRef = useRef()
  const channelRef = useRef()
  const powerOnTimeRef = useRef()
  const powerOffTimeRef = useRef()

  const powerOffHandler = () => {
    const powerOffTime = powerOffTimeRef.current.value
    try {
      const response = fetch('', {
        method: 'POST',
        body: JSON.stringify({
         
          powerOffTime,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }


  const powerOnHandler = () => {
    const frequency = frequencyRef.current.value,
      channel = channelRef.current.value,
      powerOnTime = powerOnTimeRef.current.value
  
    try {
      const response = fetch('', {
        method: 'POST',
        body: JSON.stringify({
          frequency,channel,powerOnTime
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <TextField
        helperText='Enter the frequency'
        required
        type='text'
        ref={frequencyRef}
        id='standard-basic'
        label='Frequency'
        variant='standard'
      />
      <TextField
        helperText='Enter the channel'
        required
        type='text'
        ref={channelRef}
        id='standard-basic'
        label='Channel'
        variant='standard'
      />
      <TextField
        helperText='Enter the power on time'
        required
        type='text'
        ref={powerOnTimeRef}
        id='standard-basic'
        label='Power On Time'
        variant='standard'
      />
      <TextField
        helperText='Enter the power off time'
        required
        type='text'
        id='standard-basic'
        ref={powerOffTimeRef}
        label='Power Off Time'
        variant='standard'
      />
      <Button sx={{ marginTop: '1em' }} onClick={powerOnHandler}>Turn On Power</Button>
      <Button sx={{ marginTop: '1em' }} onClick={powerOffHandler}>Turn Off Power</Button>
    </>
  )
}

export default VoltageGlitcher
