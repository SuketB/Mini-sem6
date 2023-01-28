import { Grid } from '@mui/material'
import React from 'react'

const RightPanelUART = ({currentModule}) => {
    let content = <div>Please select a module</div>
    if(currentModule==='Module 1')
    content = <div>Module 1 Input</div>
    else if(currentModule==='Module 2')
    content = <div>Module 2 Input</div>
    else if(currentModule==='Module 3')
    content = <div>Module 3 Input</div>
    else if(currentModule==='Module 4')
    content = <div>Module 4 Input</div>

  return (
    <Grid item xs={6}>
     {content}  
    </Grid>
  )
}

export default RightPanelUART