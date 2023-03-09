import { Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material"

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

    // <div style={{border: "2px solid black", padding: "10px", marginBottom: "15px"}}>
    //   <h3> Nombre: {product.title} </h3>
    //   <h3> Precio: {product.price.toLocaleString()} </h3>
    //   <h3> Cantidad: {product.quantity} </h3>
    //   <Button onClick={() => deleteProductById(product.id)} size="small" variant="contained" sx={{ textTransform: "none", mt: 3 }} style={{backgroundColor: "#C62828"}}> Remover del Carrito </Button>
    // </div>
  )
}