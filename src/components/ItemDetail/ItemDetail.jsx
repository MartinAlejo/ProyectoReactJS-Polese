import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ItemDetail = ( {product} ) => {

  const { addToCart, getQuantityById } = useContext( CartContext )

  const onAdd = ( cantidad ) => {
    const obj = {
      ...product,
      quantity: cantidad
    }

    addToCart(obj)

    fireToast()
  }

  const fireToast = () => {
    toast.success('El producto se agrego al carrito', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
  }

  const quantity = getQuantityById(product.id)

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
          ${product.price?.toLocaleString()}
        </Typography>
      </CardContent>
      <CardActions style={{display: "flex", flexDirection: "column"}}>
          <ItemCount initial={quantity} stockInicial={product.stock} onAdd={onAdd} />
      </CardActions>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
    </Card>
  )
}