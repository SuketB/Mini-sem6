import Table from '../components/Table'
import React, { useRef, useState } from 'react'
import { Button, Grid, TextField } from '@mui/material'
import Modal from '../components/Modal'
import ModalOverlay from '../components/Modal'



const reports = () => {

    

    const [openModal, setOpenModal] = useState(false)
    const [currentReport, setCurrentReport] = useState(null);
    const [keywordsToFilterString, setkeywordsToFilterString] = useState('');
    const [highlightedKeywords, setHighlightedKeywords] = useState([]);

  const handleOpen = (report) => {
    setCurrentReport(report)
    setOpenModal(true)
  }
  const handleClose = () => {
    setCurrentReport(null)
    setOpenModal(false)
  }

  const handleFilterKeywords = () => {
    const filterKeywords = keywordsToFilterString.split(' ').filter(e => e !== '')
    setHighlightedKeywords(filterKeywords)
    
  }


  return (
    <Grid
      container
      sx={{ display: 'flex', justifyContent: 'center' }}
      spacing={4}
    >
      <Grid item xs={6}>
        {openModal ? (
          <ModalOverlay
            highlightedKeywords={highlightedKeywords}
            currentReport={currentReport}
            handleClose={handleClose}
          ></ModalOverlay>
        ) : (
          <Table
            setHighlightedKeywords={setHighlightedKeywords}
            setCurrentReport={setCurrentReport}
            handleOpen={handleOpen}
          ></Table>
        )}
      </Grid>
      <Grid item xs={2}>
        <TextField
          helperText='Enter the words to be highlighted (Leave space after every word)'
          required
          type='text'
          id='standard-basic'
          label='Highlighted Words'
          variant='standard'
          onChange={(e) => setkeywordsToFilterString(e.target.value)}
        />
        <Button onClick={handleFilterKeywords}>Filter!</Button>
      </Grid>
    </Grid>
  )
}

export default reports