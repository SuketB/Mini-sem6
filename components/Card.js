import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export default function ActionAreaCard({title, description,setCurrentModule}) {
  return (
    <Card
      sx={{ maxWidth: 345, backgroundColor: '#1976d2',color:'#fff' }}
      onClick={() => setCurrentModule(title)}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
