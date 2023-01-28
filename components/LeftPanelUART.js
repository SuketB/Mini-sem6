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
      <Grid container direction='column' xs={6} rowSpacing={6}>
        <Grid item>
          <ActionAreaCard
            title='Module 1'
            description='Info about module 1'
            setCurrentModule={setCurrentModule}
          />
        </Grid>
        <Grid item>
          <ActionAreaCard
            title='Module 2'
            description='Info about module 2'
            setCurrentModule={setCurrentModule}
          />
        </Grid>
        <Grid item>
          <ActionAreaCard
            title='Module 3'
            description='Info about module 3'
            setCurrentModule={setCurrentModule}
          />
        </Grid>
        <Grid item>
          <ActionAreaCard
            title='Module 4'
            description='Info about module 4'
            setCurrentModule={setCurrentModule}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LeftPanelUART