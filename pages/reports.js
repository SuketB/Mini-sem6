import Table from '../components/Table'
import React from 'react'
import { Grid } from '@mui/material'

const reports = () => {
  return (
    <Grid container sx={{display:'flex',justifyContent:'center'}}>
      <Grid item xs={6}>
        <Table></Table>
      </Grid>
    </Grid>
  )
}

export default reports