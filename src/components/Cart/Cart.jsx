import { useContext, useState } from "react"
import Swal from "sweetalert2"
import { CartContext } from "../../context/CartContext"
import { EmptyCart } from "../EmptyCart/EmptyCart"
import { FinishBuy } from "../FinishBuy/FinishBuy"
import { FormCheckout } from "../FormCheckout/FormCheckout"

export const Cart = () => {

  const { cart, clearCart, deleteProductById, getTotalPrice, isEmpty } = useContext( CartContext )

  const [buy, setBuy] = useState(false)
  const [orderId, setOrderId] = useState(null);

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

  if (orderId) {
    // Si el usuario ya finalizo la compra
    return (
      <FinishBuy orderId={orderId} />
    )
  }

  if (buy) {
    // Si el usuario va a finalizar la compra
    return <FormCheckout cart={cart} total={getTotalPrice()} setOrderId={setOrderId} clearCart={clearCart} />
  }

  if (isEmpty()) {
    return <EmptyCart />
  }

  return (
    <div style={{alignSelf: "center"}}>
      <h1> <b> CARRITO </b> </h1>
      {cart.map( (prod) => { 
        return <div key={prod.id} style={{border: "2px solid black", padding: "10px", marginBottom: "15px"}}>
          <h3> Nombre: {prod.title} </h3>
          <h3> Precio: {prod.price.toLocaleString()} </h3>
          <h3> Cantidad: {prod.quantity} </h3>
          <button onClick={() => deleteProductById(prod.id)}> Remover del Carrito </button>
        </div>
      })}
      <h1><b> PRECIO TOTAL: </b> ${getTotalPrice().toLocaleString()} </h1>
      <button onClick={() => setBuy(true)} style={{marginTop: "30px", marginBottom: "30px", marginLeft: "12px"}}> Ir a finalizar compra </button>
      <button onClick={() => askConfirmationClearCart()} style={{marginTop: "30px", marginBottom: "30px", marginLeft: "12px"}}> Vaciar carrito </button>
    </div>
  )
}