import { Button } from "@mui/material"

export const ProductCartCard = ({ product, deleteProductById }) => {
  return (
    <div style={{border: "2px solid black", padding: "10px", marginBottom: "15px"}}>
      <h3> Nombre: {product.title} </h3>
      <h3> Precio: {product.price.toLocaleString()} </h3>
      <h3> Cantidad: {product.quantity} </h3>
      <Button onClick={() => deleteProductById(product.id)} size="small" variant="contained" sx={{ textTransform: "none", mt: 3 }} style={{backgroundColor: "#C62828"}}> Remover del Carrito </Button>
    </div>
  )
}