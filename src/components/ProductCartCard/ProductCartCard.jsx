import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material"

export const ProductCartCard = ({ product, deleteProductById }) => {
  return (

    <Card sx={{ display: 'flex', width: "80vw", mt:5 }}>
      <CardMedia
        component="img"
        sx={{width: 250, mr: 3}}
        image={product.img}
      />
      <Box sx={{padding: 4}}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', padding: 0}}>
          <Typography component="div" variant="h6" sx={{mb: 1}}>
            {product.title}
          </Typography>
          <Typography component="div"variant="h6" sx={{mb: 1}}>
            Precio: {product.price.toLocaleString()}
          </Typography>
          <Typography component="div"variant="h6" sx={{mb: 1}}>
            Cantidad: {product.quantity}
          </Typography>
        </CardContent>
        <Button onClick={() => deleteProductById(product.id)} size="small" variant="contained" sx={{ textTransform: "none", mt: 2 }} style={{backgroundColor: "#C62828"}}> Remover del Carrito </Button>
      </Box>
    </Card>
  )
}