import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount"
import { products } from "../../productsMock"

export const ItemDetailContainer = () => {

  const { id } = useParams()

  const [product, setProduct] = useState({})

  useEffect (() => {
    setProduct(products.find( prod => prod.id === Number(id) ))
  }, [id])

  return (
    <Card sx={{ maxWidth: 400, mb: 5 }} style={{display: 'flex', flexDirection: 'column', alignSelf: 'center'}}>
      <CardMedia
        component="img"
        height="400"
        image={product.img}
      />
      <CardContent style={{display: "flex", flexDirection: "column", height: "100%"}}>
        <Typography gutterBottom variant="body1" component="div" align="center" style={{marginBottom: "15px"}}>
          {product.title}
        </Typography>
        <Typography gutterBottom variant="body1" component="div" align="center" style={{marginBottom: "15px"}}>
          {product.description}
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center" style={{marginTop: "auto"}}>
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions style={{display: "flex", flexDirection: "column"}}>
          <ItemCount initial={1} stockInicial={product.stock} productName={product.title} />
      </CardActions>
    </Card>
  )
}