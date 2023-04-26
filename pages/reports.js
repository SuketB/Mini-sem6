import Table from '../components/Table'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import Modal from '../components/Modal'
import ModalOverlay from '../components/Modal'
import useSentenceFinder from '../hooks/useSentenceFinder'

const Reports = () => {
  const [openModal, setOpenModal] = useState(false)
  const [currentReport, setCurrentReport] = useState(null);
  const [keywordsToFilterString, setKeywordsToFilterString] = useState('');
  const [highlightedKeywords, setHighlightedKeywords] = useState([]);
  const [defaultKeywords, setDefaultKeywords] = useState(['winter', 'chamber'])

  const { sentenses, findSentences } = useSentenceFinder()

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
    findSentences(currentReport.description, filterKeywords)
  }

  const applyDefaultKeywords = () => {
    findSentences(currentReport.description, defaultKeywords)
  }

  useEffect(() => { console.log(sentenses); }, [sentenses])

  return (
    <Grid container spacing={4}>
      <Grid item xs={3}>
        <Table setCurrentReport={setCurrentReport} handleOpen={handleOpen} />
      </Grid>
      <Grid item xs={9}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h5" sx={{ mb: 2 }}>Highlight Words:</Typography>
            <TextField
              helperText='Enter the words to be highlighted (Leave space after every word)'
              required
              type='text'
              id='standard-basic'
              label='Highlighted Words'
              variant='standard'
              onChange={(e) => setKeywordsToFilterString(e.target.value)}
            />
            <Button onClick={handleFilterKeywords} sx={{ ml: 1 }}>Filter</Button>
            <Button onClick={applyDefaultKeywords} sx={{ ml: 1 }}>Default</Button>
          </Grid>
          <Grid item>
            <Typography variant="h5" sx={{ mb: 2 }}>Report Text:</Typography>
            {currentReport && <Typography>{currentReport.description}</Typography>}
          </Grid>
          <Grid item>
            <Typography variant="h5" sx={{ mb: 2 }}>Highlighted Sentences:</Typography>
            {sentenses.map(sentence => (
              <Typography key={sentence} sx={{ display: 'inline-block', backgroundColor: 'yellow', px: 1, mr: 1 }}>{sentence}</Typography>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Reports
