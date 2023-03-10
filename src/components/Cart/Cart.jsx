import { Button } from "@mui/material"
import { useContext, useState } from "react"
import Swal from "sweetalert2"
import { CartContext } from "../../context/CartContext"
import { EmptyCart } from "../EmptyCart/EmptyCart"
import { FinishBuy } from "../FinishBuy/FinishBuy"
import { FormCheckout } from "../FormCheckout/FormCheckout"
import { ProductCartCard } from "../ProductCartCard/ProductCartCard"

export const Cart = () => {

  const { cart, clearCart, deleteProductById, getTotalPrice, isEmpty } = useContext( CartContext )

  const [buy, setBuy] = useState(false)
  const [order, setOrder] = useState(null);

  const askConfirmationClearCart = () => {
    Swal.fire({
      title: 'Borrar carrito',
      text: '¿Estás seguro que querés borrar todos los productos de tu carrito?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: "#DD6B55",
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
      }
    })
  }

  if (order) {
    // Si el usuario ya finalizo la compra
    return (
      <FinishBuy order={order} />
    )
  }

  if (buy) {
    // Si el usuario va a finalizar la compra
    return <FormCheckout cart={cart} total={getTotalPrice()} setOrder={setOrder} clearCart={clearCart} />
  }

  if (isEmpty()) {
    return <EmptyCart />
  }

  return (
    <div style={{alignSelf: "center"}}>
      <h1> <b> Carrito de compras </b> </h1>
      {cart.map( (product) => { 
        return <ProductCartCard key={product.id} product={product} deleteProductById={deleteProductById} />
      })}
      <div style={{display: "flex", justifyContent: "space-between", marginTop: "5vh"}}>
        <Button onClick={() => askConfirmationClearCart()} style={{marginTop: "30px", marginBottom: "30px", marginLeft: "12px"}} size="small" variant="contained" sx={{ textTransform: "none", mt: 3}} color="error"> Vaciar carrito </Button>
        <div style={{display: "flex", alignItems: "center"}}>
          <h3 style={{marginRight: "30px"}}><b> Total: </b> ${getTotalPrice().toLocaleString()} </h3>
          <Button onClick={() => setBuy(true)} style={{marginTop: "30px", marginBottom: "30px"}} size="small" variant="contained" sx={{ textTransform: "none", mt: 3 }}> Ir a finalizar compra </Button>
        </div>
      </div>
    </div>
  )
}