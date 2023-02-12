import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

export const ProductCard = ({element}) => {
  return (
    <Card sx={{ maxWidth: 250, mt: 5 }} style={{display: 'flex', flexDirection: 'column'}}>
      <CardMedia
        component="img"
        height="250"
        image={element.img}
      />
      <CardContent style={{display: "flex", flexDirection: "column", height: "100%"}}>
        <Typography gutterBottom variant="body1" component="div" align="center" style={{marginBottom: "15px"}}>
          {element.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" style={{marginTop: "auto"}}>
          ${element.price}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center"}}>
        <Button
          size="large"
          variant="contained"
          sx={{ textTransform: "none" }}
        >
          Ver más
        </Button>
      </CardActions>
    </Card>
  )
}
