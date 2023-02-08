import { Grid } from '@mui/material'
import React from 'react'
import ActionAreaCard from './Card'

const LeftPanelUART = ({setCurrentModule}) => {
  return (
    <Grid
      item
      xs={6}
      sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}
    >
      <Grid container direction='column' xs={6} rowSpacing={1}>
        <Grid item>
          <ActionAreaCard
            title='Voltage Glitcher'
            description='Here we can add some description about voltage glitcher'
            setCurrentModule={setCurrentModule}
          />
        </Grid>
        <Grid item>
          <ActionAreaCard
            title='Detect Baudrate'
            description='Here we can add some description about detect baudrate'
            setCurrentModule={setCurrentModule}
          />
        </Grid>
        <Grid item>
          <ActionAreaCard
            title='Check For UART Console'
            description='Here we can add some description about console'
            setCurrentModule={setCurrentModule}
          />
        </Grid>
        <Grid item>
          <ActionAreaCard
            title='Captue Boot Logs'
            description='Here we can add some description about boot logs'
            setCurrentModule={setCurrentModule}
          />
        </Grid>
        <Grid item>
          <ActionAreaCard
            title='Analyze Boot Logs'
            description='Here we can add some description about this'
            setCurrentModule={setCurrentModule}
          />
        </Grid>
        
      </Grid>
    </Grid>
  )
}

export default LeftPanelUART