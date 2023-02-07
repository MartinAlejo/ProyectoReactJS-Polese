import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

export const ProductCard = ({element}) => {
  return (
    <Card sx={{ maxWidth: 250, mt: 5 }} style={{display: 'flex', flexDirection: 'column'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={element.img}
        />
        <CardContent style={{display: 'flex', flexDirection: 'column'}}>
          <Typography gutterBottom variant="h6" component="div">
            {element.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {element.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
