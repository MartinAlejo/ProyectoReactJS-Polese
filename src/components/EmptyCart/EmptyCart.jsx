import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export const EmptyCart = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h2>No hay elementos en el carrito</h2>
      <Link to="/" style={{textDecoration: "none"}}>
        <Button size="medium" variant="contained" sx={{ textTransform: "none", mt: 3 }}> Seguir comprando </Button>
      </Link>
    </div>
  )
}