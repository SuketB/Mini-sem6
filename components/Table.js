import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button } from '@mui/material'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#1976d2',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))



const rows = [
  {
    title: 'Report 1',
    description:
      "Now is the winter of our discontent Made glorious summer by this sun of York. And all the clouds that lour'd upon our house In the deep bosom of the ocean buried. Now are our brows bound with victorious wreaths. Our bruised arms hung up for monuments; Our stern alarums changed to merry meetings, Our dreadful marches to delightful measures. Grim-visaged war hath smooth'd his wrinkled front; And now, instead of mounting barded steeds To fright the souls of fearful adversaries. He capers nimbly in a lady's chamber To the lascivious pleasing of a lute. But I, that am not shaped for sportive tricks. Nor made to court an amorous looking-glass. I, that am rudely stamp'd, and want love's majesty To strut before a wanton ambling nymph; I, that am curtail'd of this fair proportion",
  },
  {
    title: 'Report 2',
    description:
      "Fog everywhere. Fog up the river, where it flows among green aits and meadows. Fog down the river, where it rolls deified among the tiers of shipping and the waterside pollutions of a great (and dirty) city. Fog on the Essex marshes, fog on the Kentish heights. Fog creeping into the cabooses of collier-brigs. Fog lying out on the yards and hovering in the rigging of great ships. Fog drooping on the gunwales of barges and small boats. Fog in the eyes and throats of ancient Greenwich pensioners, wheezing by the firesides of their wards. Fog in the stem and bowl of the afternoon pipe of the wrathful skipper, down in his close cabin. Fog cruelly pinching the toes and fingers of his shivering little apprentice boy on deck. Chance people on the bridges peeping over the parapets into a nether sky of fog, with fog all round them, as if they were up in a balloon and hanging in the misty clouds.",
  },
  {
    title: 'Report 3',
    description:
      "Now is the winter of our discontent Made glorious summer by this sun of York. And all the clouds that lour'd upon our house In the deep bosom of the ocean buried. Now are our brows bound with victorious wreaths. Our bruised arms hung up for monuments; Our stern alarums changed to merry meetings, Our dreadful marches to delightful measures. Grim-visaged war hath smooth'd his wrinkled front; And now, instead of mounting barded steeds To fright the souls of fearful adversaries. He capers nimbly in a lady's chamber To the lascivious pleasing of a lute. But I, that am not shaped for sportive tricks. Nor made to court an amorous looking-glass. I, that am rudely stamp'd, and want love's majesty To strut before a wanton ambling nymph; I, that am curtail'd of this fair proportion",
  },
  {
    title: 'Report 4',
    description:
      "Fog everywhere. Fog up the river, where it flows among green aits and meadows. Fog down the river, where it rolls deified among the tiers of shipping and the waterside pollutions of a great (and dirty) city. Fog on the Essex marshes, fog on the Kentish heights. Fog creeping into the cabooses of collier-brigs. Fog lying out on the yards and hovering in the rigging of great ships. Fog drooping on the gunwales of barges and small boats. Fog in the eyes and throats of ancient Greenwich pensioners, wheezing by the firesides of their wards. Fog in the stem and bowl of the afternoon pipe of the wrathful skipper, down in his close cabin. Fog cruelly pinching the toes and fingers of his shivering little apprentice boy on deck. Chance people on the bridges peeping over the parapets into a nether sky of fog, with fog all round them, as if they were up in a balloon and hanging in the misty clouds.",
  },
  {
    title: 'Report 5',
    description:
      "Fog everywhere. Fog up the river, where it flows among green aits and meadows. Fog down the river, where it rolls deified among the tiers of shipping and the waterside pollutions of a great (and dirty) city. Fog on the Essex marshes, fog on the Kentish heights. Fog creeping into the cabooses of collier-brigs. Fog lying out on the yards and hovering in the rigging of great ships. Fog drooping on the gunwales of barges and small boats. Fog in the eyes and throats of ancient Greenwich pensioners, wheezing by the firesides of their wards. Fog in the stem and bowl of the afternoon pipe of the wrathful skipper, down in his close cabin. Fog cruelly pinching the toes and fingers of his shivering little apprentice boy on deck. Chance people on the bridges peeping over the parapets into a nether sky of fog, with fog all round them, as if they were up in a balloon and hanging in the misty clouds.",
  },
  {
    title: 'Report 6',
    description:
      "Fog everywhere. Fog up the river, where it flows among green aits and meadows. Fog down the river, where it rolls deified among the tiers of shipping and the waterside pollutions of a great (and dirty) city. Fog on the Essex marshes, fog on the Kentish heights. Fog creeping into the cabooses of collier-brigs. Fog lying out on the yards and hovering in the rigging of great ships. Fog drooping on the gunwales of barges and small boats. Fog in the eyes and throats of ancient Greenwich pensioners, wheezing by the firesides of their wards. Fog in the stem and bowl of the afternoon pipe of the wrathful skipper, down in his close cabin. Fog cruelly pinching the toes and fingers of his shivering little apprentice boy on deck. Chance people on the bridges peeping over the parapets into a nether sky of fog, with fog all round them, as if they were up in a balloon and hanging in the misty clouds.",
  },
]



export default function CustomizedTables({ handleOpen, setCurrentReport }) {


  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%' }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Report</StyledTableCell>
            <StyledTableCell align='right'>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((ele) => (
            <StyledTableRow key={ele.title}>
              <StyledTableCell component='th' scope='row'>
                {ele.title}
              </StyledTableCell>
              <StyledTableCell align='right'>
                <Button onClick={() => handleOpen(ele)}>Analyze</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
