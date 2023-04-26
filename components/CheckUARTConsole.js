import {
  Button,
  FormControl,
  Input,
  InputLabel,
  TextField,
} from '@mui/material'
import React, { useRef } from 'react'

const CheckUARTConsole = () => {

  const baudrateRef = useRef()

  const handleSubmit = () => {
    const baudrate = baudrateRef.current.value
     
    try {
      const response = fetch('', {
        method: 'POST',
        body: JSON.stringify({
          baudrate,
          
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
        helperText='Enter the baudrate'
        required
        ref={baudrateRef}
        type='text'
        id='standard-basic'
        label='Baudrate'
        variant='standard'
      />
      <Button sx={{ marginTop: '1em' }} onClick={handleSubmit}>Submit</Button>
    </>
  )
}

export default CheckUARTConsole
