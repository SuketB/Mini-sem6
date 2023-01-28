import { Grid } from '@mui/material'
import React, {  useState } from 'react'
import LeftPanelUART from '@/components/LeftPanelUART'
import RightPanelUART from '@/components/RightPanelUART';

const uart = () => {
    const [currentModule, setCurrentModule] = useState('none');

   
  return (
    <Grid container spacing={3}>
      <LeftPanelUART setCurrentModule={setCurrentModule} />
      <RightPanelUART currentModule={currentModule}/>
    </Grid>
  )
}

export default uart