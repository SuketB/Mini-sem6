import { Button, FormControl, Input, InputLabel, TextField } from '@mui/material'
import React, { useRef } from 'react'

const DetectBaudrate = () => {
  const timeRef = useRef()
  const rebootDelayRef = useRef()

  const handleSubmit = () => {
      const time = timeRef.current.value, rebootDelay = rebootDelayRef.current.value
      try{
          const response  = fetch('',{
            method: 'POST',
            body: JSON.stringify({
              time, rebootDelay
            }),
            headers:{
              'Content-Type': 'application/json'
            }
          })
      }
      catch(e){
        console.log(e)
      }  
  }

  return (
    <>
      <TextField
        helperText='Enter the sample time'
        required
        type='text'
        ref={timeRef}
        id='standard-basic'
        label='Sample Time'
        variant='standard'
      />
      <TextField
        helperText='Enter the reboot delay'
        required
        type='text'
        ref={rebootDelayRef}
        id='standard-basic'
        label='Reboot Delay'
        variant='standard'
      />
      <Button sx={{marginTop:'1em'}} onClick={handleSubmit}>Submit</Button>
    
  </>)
}

export default DetectBaudrate