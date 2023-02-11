import { Box, Grid } from '@mui/material'
import React from 'react'
import CaptureBootLogs from './CaptureBootLogs'
import CheckUARTConsole from './CheckUARTConsole'
import DetectBaudrate from './DetectBaudrate'
import VoltageGlitcher from './VoltageGlitcher'

const RightPanelUART = ({currentModule}) => {
    let content = <div>Please select a module</div>
    if (currentModule === 'Voltage Glitcher')
      content = <VoltageGlitcher/>
    else if (currentModule === 'Detect Baudrate') 
      content = <DetectBaudrate/>
    else if (currentModule === 'Check For UART Console')
      content = <CheckUARTConsole/>
    else if (currentModule === 'Captue Boot Logs')
      content = <CaptureBootLogs/>
    else if (currentModule === 'Analyze Boot Logs')
      content = <div>Analyzing</div>

  return (
    <Grid item xs={6}>
      <form>
        <Box
          sx={{
            p: 2,
            border: '1px dashed grey',
            width: '18rem',
            marginLeft: '20%',
            display: 'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
          }}
        >
          {content}
        </Box>
      </form>
    </Grid>
  )
}

export default RightPanelUART